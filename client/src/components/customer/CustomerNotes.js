import React from 'react'
import { connect } from 'react-redux'

const CustomerNotes = ({ getAdminClients, clients, goPage }) => {
	const data = {
		date: '10/14/2019',
		subject: 'Root Canal',
		notes: 'Attempted root canal treatment on tooth 15. Examination of the X-ray revealed that the canal has closed off. The patient has been informed that the tooth can  either be extracted and crowned or have a post and core and be crowned. A treatment plan is being determined.'
	}

	return (
		<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-12 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Notes</div>
					</div>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-md-12'>
					<div className='box-shadow rounded-lg'>
						<div className='table-responsive'>
							<table className='table table-striped'>
								<thead>
									<tr>
										<th style={{ minWidth: '140px' }}>Date</th>
										<th style={{ minWidth: '180px' }}>Subject</th>
										<th style={{ minWidth: '500px' }}>Notes</th>
									</tr>
								</thead>
								<tbody>
									{[0, 1, 2].map((item, index) =>
										<tr key={index}>
											<td>{data.date}</td>
											<td>{data.subject}</td>
											<td>{data.notes}</td>
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
	// clients: state.admin.clients
})

export default connect(mapStateToProps, {})(CustomerNotes)