import api from '../utils/api'
import {
  NOTES_LOADED,
  NOTE_LOADED
} from './types'

export const createNote = (note, history) => async dispatch => {
  const res = await api.post('/note/createNote', note)

  if (res.data.success) {
    dispatch(getCustomerNotes(note.customer))
    history.push(`/patient/${note.customer}`)
  }
}

export const getCustomerNotes = userID => async dispatch => {
  const res = await api.get(`/note/getCustomerNotes/${userID}`)

  if (res.data.success) {
    dispatch({
      type: NOTES_LOADED,
      payload: res.data.notes
    })
  }
}

export const getNote = noteID => async dispatch => {
  const res = await api.get(`/note/getNote/${noteID}`)

  if (res.data.success) {
    dispatch({
      type: NOTE_LOADED,
      payload: res.data.note
    })
  }
}

export const updateNote = (note, noteID, userID, history) => async dispatch => {
  const res = await api.post(`/note/updateNote/${noteID}`, note)

  if (res.data.success) {
    dispatch(getCustomerNotes(userID))
    history.push(`/patient/${userID}`)
  }
}

export const deleteNote = (noteID, userID) => async dispatch => {
  const res = await api.delete(`/note/deleteNote/${noteID}`)

  if (res.data.success) {
    dispatch(getCustomerNotes(userID))
  }
}