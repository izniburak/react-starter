export const APP_STATUS = 'APP_STATUS'
export const SET_USER = 'SET_USER'
export const APP_STATUS_TYPE = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const appStatus = status => ({
  type: APP_STATUS,
  status
})

export const setUser = payload => ({
  type: SET_USER,
  payload
})
