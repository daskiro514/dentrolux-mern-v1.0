import {
  NOTES_LOADED,
  NOTE_LOADED
} from '../actions/types'

import { _formatDate } from '../utils/formatDate1'

const initialState = {
  notes: [],
  note: {
    date: _formatDate(new Date()),
    subject: '',
    note: ''
  }
}

const noteReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case NOTES_LOADED: {
      return {
        ...state,
        notes: payload
      }
    }
    case NOTE_LOADED: {
      return {
        ...state,
        note: payload
      }
    }
    default:
      return state
  }
}

export default noteReducer