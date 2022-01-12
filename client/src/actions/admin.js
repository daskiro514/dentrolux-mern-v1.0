// import api from '../utils/api'
// import { setAlert } from './alert'
import {
  CURRENT_PAGE_SET
} from './types'

export const setCurrentPage = currentPage => async dispatch => {
  dispatch({
    type: CURRENT_PAGE_SET,
    payload: currentPage
  })
}

export const goPage = (history, location) => async () => {
  await history.push(`/${location}`)
}