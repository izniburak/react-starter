import * as actions from './Actions'

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actions.APP_STATUS:
      return { ...state, status: action.status }
    case actions.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export { reducer, actions }
