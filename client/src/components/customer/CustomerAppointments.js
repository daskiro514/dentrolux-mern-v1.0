import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCustomerAppointments, deleteAppointment } from '../../actions/appointment'
import { formatDate } from '../../utils/formatDate1'

const CustomerAppointments = ({ userID, appointments, getCustomerAppointments, deleteAppointment }) => {

  React.useEffect(() => {
    getCustomerAppointments(userID)
  }, [getCustomerAppointments, userID])

  return (
    <div className='customer-appointments'>
      <div className='row admin-header align-items-center py-2'>
        <div className='col-md-4 py-2'>
          <div className='d-flex flex-row'>
            <div className='logo py-1'>Appointments</div>
          </div>
        </div>
        <div className='col-md-8 py-1'>
          <div className='d-flex justify-content-end'>
            <span>
              <Link
                type='button'
                className='btn border rounded-lg box-shadow p-1 px-3 text-center'
                style={{ outline: 'none' }}
                to={'/appointment-create'}
              >
                New Appointment
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className='appointments mt-3'>
        {appointments.map((item, index) =>
          <div key={index} className='row rounded-lg box-shadow mx-1 my-2 align-items-center'>
            <div className='col-lg-3 text-center py-1'>
              {formatDate(item.date)}
            </div>
            <div className='col-lg-3 text-center py-1'>
              {item.time1}, {item.time2}, {item.time3}
            </div>
            <div className='col-lg-3 text-center py-1'>
              {item.type}
            </div>
            <div className='col-lg-3 text-center py-3'>
              <Link to={`/appointment-edit/${item._id}`} className='btn btn-sm dentrolux-bg-primary text-white width-100'>Edit</Link>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure?')) deleteAppointment(item._id, userID)
                }}
                className='btn btn-sm dentrolux-bg-primary text-white width-100 ml-2'
              >Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  appointments: state.appointment.appointments,
  userID: state.auth.user._id
})

export default connect(mapStateToProps, { getCustomerAppointments, deleteAppointment })(CustomerAppointments)