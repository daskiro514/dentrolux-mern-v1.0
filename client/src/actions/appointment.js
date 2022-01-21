import api from '../utils/api'
import {
  APPOINTMENTS_LOADED,
  APPOINTMENT_LOADED
} from './types'

export const createAppointment = (appointment, history) => async dispatch => {
  const res = await api.post('/appointment/createAppointment', appointment)

  if (res.data.success) {
    dispatch(getCustomerAppointments(appointment.customer))
    history.push('/appointments')
  }
}

export const getAllAppointments = () => async dispatch => {
  const res = await api.get('/appointment/getAllAppointments')

  if (res.data.success) {
    dispatch({
      type: APPOINTMENTS_LOADED,
      payload: res.data.appointments
    })
  }
}

export const getCustomerAppointments = userID => async dispatch => {
  const res = await api.get(`/appointment/getCustomerAppointments/${userID}`)

  if (res.data.success) {
    dispatch({
      type: APPOINTMENTS_LOADED,
      payload: res.data.appointments
    })
  }
}

export const getAppointment = appointmentID => async dispatch => {
  const res = await api.get(`/appointment/getAppointment/${appointmentID}`)

  if (res.data.success) {
    dispatch({
      type: APPOINTMENT_LOADED,
      payload: res.data.appointment
    })
  }
}

export const getNextAppointment = patientID => async dispatch => {
  const res = await api.get(`/appointment/getNextAppointment/${patientID}`)

  if (res.data.success) {
    dispatch({
      type: APPOINTMENT_LOADED,
      payload: res.data.appointment
    })
  }
}

export const updateAppointment = (appointment, appointmentID, userID, history) => async dispatch => {
  const res = await api.post(`/appointment/updateAppointment/${appointmentID}`, appointment)

  if (res.data.success) {
    dispatch(getCustomerAppointments(userID))
    history.push('/appointments')
  }
}

export const approveAppointment = (appointmentID, time) => async dispatch => {
  const res = await api.get(`/appointment/approveAppointment/?appointmentID=${appointmentID}&time=${time}`)

  if (res.data.success) {
    dispatch(getAllAppointments())
  }
}

export const denyAppointment = appointmentID => async dispatch => {
  const res = await api.get(`/appointment/denyAppointment/${appointmentID}`)

  if (res.data.success) {
    dispatch(getAllAppointments())
  }
}

export const deleteAppointment = (appointmentID, userID) => async dispatch => {
  const res = await api.delete(`/appointment/deleteAppointment/${appointmentID}`)

  if (res.data.success) {
    dispatch(getCustomerAppointments(userID))
  }
}