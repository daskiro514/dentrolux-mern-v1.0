import React from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { getAllAppointments, approveAppointment, denyAppointment } from '../../actions/appointment'
import { formatDate } from '../../utils/formatDate1'

const AdminAppointment = ({ appointments, getAllAppointments, approveAppointment, denyAppointment }) => {
	const [value, onChange] = React.useState(new Date())
	const [showModal, setShowModal] = React.useState('none')
	const [showAppointment, setShowAppointment] = React.useState(null)

	React.useEffect(() => {
		getAllAppointments()
	}, [getAllAppointments])

	return (
		<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-4 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Appointments</div>
					</div>
				</div>
			</div>

			<p className='mb-0 mt-3'>Current appointments</p>

			<div className='row mt-4'>
				<div className='col-lg-4 col-sm-12'>
					<Calendar
						onChange={onChange}
						value={value}
					/>
				</div>
				<div className='col-lg-8 col-sm-12'>
				</div>
			</div>

			<p className='mt-4'>Select date and time</p>

			<div className='mb-4'>
				{appointments.map((item, index) =>
					<div key={index} className='row rounded-lg box-shadow mx-1 mt-4' style={{ alignItems: 'center' }}>
						<div className='col-lg-2'>
							<div className='py-3'>
								<p className='text-center mb-0'>{item.customer.firstName} {item.customer.lastName}</p>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='py-3'>
								<p className='text-center mb-0'>{formatDate(item.date)}</p>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='py-3'>
								<p className='text-center mb-0'>
									<span className={item.time1 === item.approvedTime ? 'badge dentrolux-bg-primary' : ''}>{item.time1} </span>,
									<span className={item.time2 === item.approvedTime ? 'badge dentrolux-bg-primary' : ''}>{item.time2} </span>,
									<span className={item.time3 === item.approvedTime ? 'badge dentrolux-bg-primary' : ''}>{item.time3}</span>
								</p>
							</div>
						</div>
						<div className='col-lg-2'>
							<div className='py-3'>
								<p className='text-center mb-0'>{item.type}</p>
							</div>
						</div>
						{item.status === 'Pending' ?
							<div className='col-lg-2 py-1 text-center'>
								<button
									className="btn dentrolux-bg-primary font-14 py-1 m-1 text-white width-100 rounded-lg"
									onClick={() => {
										setShowAppointment(item)
										setShowModal('block')
									}}
								>Approve</button>
								<button
									className="btn btn-secondary font-14 py-1 m-1 text-white width-100 rounded-lg"
									onClick={() => {
										if (window.confirm('Are you sure?')) denyAppointment(item._id)
									}}
								>Deny</button>
							</div>
							: item.status === 'Approved' ?
								<div className='col-lg-2 py-1 text-center'>
									<button
										className="badge font-14 py-1 m-1 width-100 rounded-lg"
									>Approved</button>
									<button
										className="btn btn-secondary font-14 py-1 m-1 text-white width-100 rounded-lg"
										onClick={() => {
											if (window.confirm('Are you sure?')) denyAppointment(item._id)
										}}
									>Deny</button>
								</div>
								:
								<div className='col-lg-2 py-1 text-center'>
									<button
										className="btn dentrolux-bg-primary font-14 py-1 m-1 text-white width-100 rounded-lg"
										onClick={() => {
											setShowAppointment(item)
											setShowModal('block')
										}}
									>Approve</button>
									<button
										className="badge font-14 py-1 m-1 width-100 rounded-lg"
									>Denied</button>
								</div>
						}
					</div>
				)}
			</div>
			<div className='modal mt-5 pt-5' style={{ display: showModal }}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4 className='modal-title'>Choose Appointment Time</h4>
						</div>
						<div className='modal-body'>
							{showAppointment ?
								<div className='row'>
									<div className='col-md-4 text-center'>
										{showAppointment.time1 ?
											<button
												onClick={() => {
													approveAppointment(showAppointment._id, showAppointment.time1)
													setShowModal('none')
												}}
												className='btn btn-info'
											>
												{showAppointment.time1}
											</button>
											: null
										}
									</div>
									<div className='col-md-4 text-center'>
										{showAppointment.time2 ?
											<button
												onClick={() => {
													approveAppointment(showAppointment._id, showAppointment.time2)
													setShowModal('none')
												}}
												className='btn btn-info'
											>
												{showAppointment.time2}
											</button>
											: null
										}
									</div>
									<div className='col-md-4 text-center'>
										{showAppointment.time3 ?
											<button
												onClick={() => {
													approveAppointment(showAppointment._id, showAppointment.time3)
													setShowModal('none')
												}}
												className='btn btn-info'
											>
												{showAppointment.time3}
											</button>
											: null
										}
									</div>
								</div>
								: null
							}
						</div>
						<div className='modal-footer'>
							<button onClick={() => setShowModal('none')} className='btn dentrolux-bg-primary text-white btn-sm'>Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

const mapStateToProps = state => ({
	appointments: state.appointment.appointments
})

export default connect(mapStateToProps, { getAllAppointments, approveAppointment, denyAppointment })(AdminAppointment)