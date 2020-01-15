import { messages } from '../reducers/messages';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = messages(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with a new message when the type is ADD_MESSAGE', () => {
    const expected = ['heyo']
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: 'heyo'
    }

    const result = messages([], mockAction)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if the type is CLEAR_MESSAGES', () => {
    const expected = []
    const mockAction = {
      type: 'CLEAR_MESSAGES',
      messages: []
    }

    const result = messages([], mockAction)

    expect(result).toEqual(expected)
  })
});