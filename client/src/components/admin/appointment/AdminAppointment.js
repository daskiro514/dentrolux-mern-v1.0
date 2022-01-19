import React, { useState } from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import AppointmentItem from './AppointmentItem'

const AdminAppointment = ({ getAdminClients, clients, goPage }) => {
	const [value, onChange] = useState(new Date())

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
				<AppointmentItem />
				<AppointmentItem />
				<AppointmentItem />
				<AppointmentItem />
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	// clients: state.admin.clients
})

export default connect(mapStateToProps, {})(AdminAppointment)