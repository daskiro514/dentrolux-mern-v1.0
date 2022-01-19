import {
  PATIENTS_LOADED,
  PATIENT_LOADED
} from '../actions/types'

const initialState = {
  patients: [],
  patient: {
    date: new Date()
  }
}

const patientReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case PATIENTS_LOADED: {
      return {
        ...state,
        patients: payload
      }
    }
    case PATIENT_LOADED: {
      return {
        ...state,
        patient: payload
      }
    }
    default:
      return state
  }
}

export default patientReducer