export const messages = (state = [], action) => {
  console.log('action', action)
  switch(action.type) {
    case 'ADD_MESSAGE':
      let message = {
        message: action.message.message,
        isUser: action.message.isUser
      }
      return [...state, message]
    case 'CLEAR_MESSAGES':
      return []
    default: 
      return state;
  }
}