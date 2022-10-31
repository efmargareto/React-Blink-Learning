export const tecnicalTestReducer = ( state = [], action ) => {
  if(action.type === 'NEW_RESULT') {
    return action.payload
  }

  return state
}