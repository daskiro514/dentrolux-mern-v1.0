import React, { useState } from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomerAppointment = ({ getAdminClients, clients, goPage }) => {
	const [value, onChange] = useState(new Date());

  return (
  	<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-12 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Appointments</div>
					</div>
				</div>
			</div>
  		<p className='mb-0 mt-3'>Select appointment type</p>
  		<div className='row mt-2'>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Teeth Cleaning</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Fillings and Restorations</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Tooth Extraction</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Wisdom Teeth Removal</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Root Canal</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Dental Sealants</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>TMJ</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Dentures</h5>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12 mt-2'>
					<div className='box-shadow p-3 bg-white rounded-lg'>
						<h5 className='text-center mb-0'>Other/Consultation</h5>
					</div>
				</div>
  		</div>

  		<p className='mb-0' style={{marginTop: '50px'}}>Select date and time</p>

  		<div className='row mt-4'>
				<div className='col-lg-4 col-sm-12'>
					<Calendar
		        onChange={onChange}
		        value={value}
		      />
				</div>
				<div className='col-lg-8 col-sm-12'>
					<div className='row'>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>9:00 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>9:30 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>10:00 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>10:30 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>11:00 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>11:30 am</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>12:00 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>12:30 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>01:00 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>01:30 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>02:00 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>02:30 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>03:00 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>03:30 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>04:00 pm</h5>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 mb-3'>
							<div className='box-shadow p-3 bg-white rounded-lg'>
								<h5 className='text-center mb-0'>04:30 pm</h5>
							</div>
						</div>
					</div>
				</div>
  		</div>

  		<div className='w-100 d-flex align-middle justify-content-around my-5'>
  			<button type="button" className="btn btn-light font-20 box-shadow px-5">Submit Request</button>
  		</div>
  	</div>
  )
}

const mapStateToProps = state => ({
  // clients: state.admin.clients
})

export default connect(mapStateToProps, {  })(CustomerAppointment)