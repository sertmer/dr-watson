import * as actions from './index';

describe('actions', () => {

  describe('addMessage', () => {
    it('should have a type of ADD_MESSAGE', () => {
      const text = 'sleep more'
      const expected = {
        type: 'ADD_MESSAGE',
        message: text
      }
      const result = actions.addMessage(text)

      expect(result).toEqual(expected)
    })
  })

  describe('clearMessages', () => {
    it('should have a type of CLEAR_MESSAGES', () => {
      const expected = {
        type: 'CLEAR_MESSAGES',
        messages: []
      }
      const result = actions.clearMessages([])

      expect(result).toEqual(expected)
    })
  })

});