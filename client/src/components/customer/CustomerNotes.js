import React from 'react'
import { connect } from 'react-redux'
import { getCustomerNotes } from '../../actions/note'

const CustomerNotes = ({ userID, notes, getCustomerNotes }) => {

	React.useEffect(() => {
		getCustomerNotes(userID)
	}, [userID, getCustomerNotes])

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
									{notes.map((item, index) =>
										<tr key={index}>
											<td>{item.date}</td>
											<td>{item.subject}</td>
											<td>{item.note}</td>
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
	notes: state.note.notes,
	userID: state.auth.user._id
})

export default connect(mapStateToProps, { getCustomerNotes })(CustomerNotes)