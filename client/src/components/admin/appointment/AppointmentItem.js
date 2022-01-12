import React from 'react'

const AppointmentItem = () => {
  return (
  	<div className='row rounded-lg box-shadow mx-1 mt-4' style={{alignItems: 'center'}}>
			<div className='col-lg-2'>
				<div className='py-3'>
					<p className='text-center mb-0'>Gordan Ramsey</p>
				</div>
			</div>
			<div className='col-lg-3'>
				<div className='py-3'>
					<p className='text-center mb-0'>Monday, November 17th 2021</p>
				</div>
			</div>
			<div className='col-lg-1'>
				<div className='py-3'>
					<p className='text-center mb-0'>3:30 PM</p>
				</div>
			</div>
			<div className='col-lg-2'>
				<div className='py-3'>
					<p className='text-center mb-0'>Teeth Cleaning</p>
				</div>
			</div>
			<div className='col-lg-2'>
				<div className='py-3'>
					<button type="button" className="btn dentrolux-bg-primary font-14 py-1 text-white w-100 rounded-lg">Approve</button>
				</div>
			</div>
			<div className='col-lg-2'>
				<div className='py-3'>
					<button type="button" className="btn dentrolux-bg-primary font-14 py-1 text-white w-100 rounded-lg">Deny</button>
				</div>
			</div>
		</div>
  )
}

export default AppointmentItem