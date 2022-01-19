import api from '../utils/api'
import {
  PATIENTS_LOADED,
  PATIENT_LOADED
} from './types'

export const getPatients = () => async dispatch => {
  const res = await api.get('/patient/getPatients')
  
  if (res.data.success) {
    dispatch({
      type: PATIENTS_LOADED,
      payload: res.data.patients
    })
  }
}

export const getPatient = patientID => async dispatch => {
  const res = await api.get(`/patient/getPatient/${patientID}`)

  if (res.data.success) {
    dispatch({
      type: PATIENT_LOADED,
      payload: res.data.patient
    })
  }
}