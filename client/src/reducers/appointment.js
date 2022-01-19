import {
  APPOINTMENTS_LOADED,
  APPOINTMENT_LOADED
} from '../actions/types'

const initialState = {
  appointments: [],
  appointment: {
    date: new Date()
  }
}

const appointmentReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case APPOINTMENTS_LOADED: {
      return {
        ...state,
        appointments: payload
      }
    }
    case APPOINTMENT_LOADED: {
      return {
        ...state,
        appointment: payload
      }
    }
    default:
      return state
  }
}

export default appointmentReducer