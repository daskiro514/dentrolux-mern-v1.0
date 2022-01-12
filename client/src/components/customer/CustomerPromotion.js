import React from 'react'
import { connect } from 'react-redux'

const CustomerPromotion = ({ getAdminClients, clients, goPage }) => {

	return (
		<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-12 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Promotions</div>
					</div>
				</div>
			</div>

			<div className='row promotions px-2'>
				<div className='col-sm-6'>
					<div className='rounded-lg mb-3'>
						<img alt='SETIMG' src='/promotions/1.png' className='img-fluid' />
					</div>
				</div>
				<div className='col-sm-6'>
					<div className='rounded-lg mb-3'>
						<img alt='SETIMG' src='/promotions/2.png' className='img-fluid' />
					</div>
				</div>
			</div>
			<div className='row promotions'>
				<div className='col-sm-12'>
					<div className='rounded-lg m-2'>
						<img alt='SETIMG' src='/promotions/3.png' className='img-fluid' />
					</div>
				</div>
			</div>
			<div className='row promotions mb-3'>
				<div className='col-sm-12'>
					<div className='rounded-lg m-2'>
						<img alt='SETIMG' src='/promotions/4.png' className='img-fluid' />
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	// clients: state.admin.clients
})

export default connect(mapStateToProps, {})(CustomerPromotion)