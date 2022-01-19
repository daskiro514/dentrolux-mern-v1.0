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

export const updateAppointment = (appointment, appointmentID, userID, history) => async dispatch => {
  const res = await api.post(`/appointment/updateAppointment/${appointmentID}`, appointment)

  if (res.data.success) {
    dispatch(getCustomerAppointments(userID))
    history.push('/appointments')
  }
}

export const deleteAppointment = (appointmentID, userID) => async dispatch => {
  const res = await api.delete(`/appointment/deleteAppointment/${appointmentID}`)

  if (res.data.success) {
    dispatch(getCustomerAppointments(userID))
  }
}