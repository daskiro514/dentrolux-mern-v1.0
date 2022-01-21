import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPatient } from '../../actions/patient'
import { getNextAppointment } from '../../actions/appointment'
import { getCustomerNotes, deleteNote } from '../../actions/note'
import formatDate from '../../utils/formatDate'

const AdminPatient = ({ match, patient, appointment, notes, getPatient, getNextAppointment, getCustomerNotes, deleteNote }) => {
  const patientID = match.params.id

  React.useEffect(() => {
    getPatient(patientID)
    getNextAppointment(patientID)
    getCustomerNotes(patientID)
  }, [patientID, getPatient, getNextAppointment, getCustomerNotes])

  return (
    <div className='admin-patients'>
      <div className='row admin-header align-items-center py-2'>
        <div className='col-md-4 py-2'>
          <div className='d-flex flex-row'>
            <div className='logo py-2'>{patient.firstName} {patient.lastName}</div>
          </div>
        </div>
        <div className='col-md-8 py-2'>
          <div className='d-flex justify-content-end'>
            <span>
              <Link
                type='button'
                className='btn border rounded-lg box-shadow p-1 px-3 text-center'
                style={{ outline: 'none' }}
                to={`/note-create/${patientID}`}
              >
                Create Note
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='box-shadow rounded-lg'>
            <div className='client-info mb-5 p-3'>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>First Name:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.firstName}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Last Name:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.lastName}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Email:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.email}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div>
                    <div className='text-left mb-1 font-18'>Phone Number:</div>
                  </div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.phone}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Address:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.address} {patient.city} {patient.state}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Sex:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18 text-uppercase'>{patient.sex}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Date of Birth:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.birth}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Age:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>{patient.age}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-18'>Next Appointment:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-18'>
                    <span>{formatDate(appointment.date)}</span>
                    {appointment.status === 'Approved' ?
                      <span className='ml-2 badge badge-info text-white'>Approved</span>
                      : appointment.status === 'Denied' ?
                        <span className='ml-2 badge badge-secondary text-white'>Denied</span>
                        :
                        <span className='ml-2 badge badge-warning'>Not Approved Yet</span>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th style={{ minWidth: '140px' }}>Date</th>
                    <th style={{ minWidth: '180px' }}>Subject</th>
                    <th style={{ minWidth: '500px' }}>Notes</th>
                    <th style={{ minWidth: '200px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes.map((item, index) =>
                    <tr key={index}>
                      <td className='align-middle'>{item.date}</td>
                      <td className='align-middle'>{item.subject}</td>
                      <td className='align-middle text-justify'>{item.note}</td>
                      <td className='align-middle'>
                        <Link
                          className='btn dentrolux-bg-primary text-white width-80'
                          to={`/note-edit/${item._id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className='btn btn-secondary ml-2 width-80'
                          onClick={() => {
                            if (window.confirm('Are you sure?')) deleteNote(item._id, patientID)
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  patient: state.patient.patient,
  appointment: state.appointment.appointment,
  notes: state.note.notes
})

export default connect(mapStateToProps, { getPatient, getNextAppointment, getCustomerNotes, deleteNote })(AdminPatient)