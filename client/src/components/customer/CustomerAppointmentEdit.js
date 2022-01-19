import React from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import formatDate from '../../utils/formatDate'
import { getAppointment, updateAppointment } from '../../actions/appointment'
import { useHistory } from 'react-router-dom'
import { setAlert } from '../../actions/alert'

const CustomerAppointmentEdit = ({ match, userID, appointment, getAppointment, updateAppointment, setAlert }) => {
  const appointmentID = match.params.id
	const history = useHistory()

	const appointmentTypes = ['Teeth Cleaning', 'Fillings and Restorations', 'Tooth Extraction', 'Wisdom Teeth Removal', 'Root Canal', 'Dental Sealants', 'TMJ', 'Dentures', 'Other/Consultation']
	const appointmentTimes = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 AM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM']

	const [appointmentType, setAppointmentType] = React.useState(appointmentTypes[0])
	const [appointmentDate, setAppointmentDate] = React.useState(new Date())
	const [appointmentTime1, setAppointmentTime1] = React.useState(null)
	const [appointmentTime2, setAppointmentTime2] = React.useState(null)
	const [appointmentTime3, setAppointmentTime3] = React.useState(null)

  React.useEffect(() => {
    getAppointment(appointmentID)
  }, [getAppointment, appointmentID])

  React.useEffect(() => {
    setAppointmentType(appointment.type)
    setAppointmentDate(new Date(appointment.date))
    setAppointmentTime1(appointment.time1)
    setAppointmentTime2(appointment.time2)
    setAppointmentTime3(appointment.time3)
  }, [appointment])

	const onSubmit = e => {
		e.preventDefault()
		if (appointmentTime1 === null) {
			setAlert('At least one of the appointment time must be selected!', 'warning')
			return
		}
		updateAppointment({
			customer: userID,
			type: appointmentType,
			date: appointmentDate,
			time1: appointmentTime1,
			time2: appointmentTime2,
			time3: appointmentTime3,
		}, appointmentID, userID, history)
	}

	const refreshAppointmentTimes = () => {
		setAppointmentTime1(null)
		setAppointmentTime2(null)
		setAppointmentTime3(null)
	}

	return (
		<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-12 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Edit Appointment</div>
					</div>
				</div>
			</div>
			<p className='mb-0 mt-3'>Select appointment type</p>
			<div className='row mt-2'>
				{appointmentTypes.map((item, index) =>
					<div key={index} className='col-lg-4 col-sm-12 mt-2'>
						<button onClick={() => setAppointmentType(item)} className={'box-shadow btn font-20 p-2 w-100 ' + (appointmentType === item ? 'appointSelected' : '')}>{item}</button>
					</div>
				)}
			</div>

			<p className='mb-0' style={{ marginTop: '50px' }}>Select date and time (You can select 3 times a day)</p>

			<div className='row mt-4'>
				<div className='col-lg-4 col-sm-12 pt-3'>
					<Calendar
						onChange={setAppointmentDate}
						value={appointmentDate}
					/>
				</div>
				<div className='col-lg-8 col-sm-12'>
					{appointmentTime1 === null ?
						<div className='row'>
							<div className='col-sm-12 mb-2'>
								Please select first appointment time
							</div>
							{appointmentTimes.map((item, index) =>
								<div key={index} className='col-lg-3 col-sm-6 mb-3'>
									<button onClick={() => setAppointmentTime1(item)} className={'box-shadow btn font-20 p-2 w-100 ' + (appointmentTime1 === item ? 'appointSelected' : '')}>{item}</button>
								</div>
							)}
						</div>
						: null
					}
					{(appointmentTime1 !== null && appointmentTime2 === null && appointmentTime3 === null) ?
						<div className='row'>
							<div className='col-sm-12 mb-2'>
								Please select second appointment time
							</div>
							{appointmentTimes.map((item, index) =>
								<div key={index} className='col-lg-3 col-sm-6 mb-3'>
									<button onClick={() => setAppointmentTime2(item)} className={'box-shadow btn font-20 p-2 w-100 ' + (appointmentTime2 === item ? 'appointSelected' : '')}>{item}</button>
								</div>
							)}
						</div>
						: null
					}
					{(appointmentTime1 !== null && appointmentTime2 !== null && appointmentTime3 === null) ?
						<div className='row'>
							<div className='col-sm-12 mb-2'>
								Please select third appointment time
							</div>
							{appointmentTimes.map((item, index) =>
								<div key={index} className='col-lg-3 col-sm-6 mb-3'>
									<button onClick={() => setAppointmentTime3(item)} className={'box-shadow btn font-20 p-2 w-100 ' + (appointmentTime3 === item ? 'appointSelected' : '')}>{item}</button>
								</div>
							)}
						</div>
						: null
					}
				</div>
			</div>

			<p className='mt-2'>
				<span className='text-info'>You selected: </span>{appointmentType}, {formatDate(appointmentDate)}, {appointmentTime1}, {appointmentTime2}, {appointmentTime3}
				<button onClick={() => refreshAppointmentTimes()} className='btn btn-sm dentrolux-bg-primary text-white ml-3'>Refresh</button>
			</p>

			<div className='w-100 d-flex align-middle justify-content-around my-5'>
				<button onClick={onSubmit} type="button" className="btn btn-light font-20 box-shadow px-5">Submit Request</button>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	userID: state.auth.user._id,
  appointment: state.appointment.appointment
})

export default connect(mapStateToProps, { getAppointment, updateAppointment, setAlert })(CustomerAppointmentEdit)