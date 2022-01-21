import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goPage } from '../../actions/admin'
import { getPatients } from '../../actions/patient'

const AdminPatients = ({ patients, getPatients, goPage }) => {
	let history = useHistory()
	const [searchKey, setSearchKey] = React.useState('')

	const [pagePatients, setPagePatients] = React.useState([])
	const [pageNumber, setPageNumber] = React.useState(1)
	const [maxPageNumber, setMaxPageNumber] = React.useState(1)

	React.useEffect(() => {
		getPatients()
	}, [getPatients])

	React.useEffect(() => {
    setPagePatients(patients.filter(patient => patient.firstName.toLowerCase().includes(searchKey.toLowerCase()) || patient.lastName.toLowerCase().includes(searchKey.toLowerCase()) || patient.email.toLowerCase().includes(searchKey.toLowerCase())))
  }, [patients, searchKey])

	React.useEffect(() => {
		setPagePatients(patients.sort((element1, element2) => { return new Date(element2.date) - new Date(element1.date) }).slice((pageNumber - 1) * 10, pageNumber * 10))
		setMaxPageNumber(Math.ceil(patients.length / 10))
	}, [patients, pageNumber])

	const nextPage = () => {
		if (pageNumber + 1 > maxPageNumber) {
			lastPage()
			return
		}
		setPageNumber(pageNumber + 1)
	}

	const prevPage = () => {
		if (pageNumber - 1 < 1) {
			firstPage()
			return
		}
		setPageNumber(pageNumber - 1)
	}

	const firstPage = () => {
		setPageNumber(1)
	}

	const lastPage = () => {
		setPageNumber(maxPageNumber)
	}

	return (
		<div className='admin-patients'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-4 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>Patients</div>
					</div>
				</div>
				<div className='col-md-8 py-2'>
					<div className='d-flex justify-content-end'>
						<span>
							<input
								placeholder='Search'
								className='border rounded-lg box-shadow p-1 text-center'
								style={{ outline: 'none' }}
								value={searchKey}
								onChange={e => setSearchKey(e.target.value)}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className='row my-3'>
				<div className='col-md-12'>
					<div className='table-responsive bg-white dentrolux-rounded-lg box-shadow'>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th>No</th>
									<th>Name</th>
									<th>Surname</th>
									<th>Email</th>
									<th>Phone Number</th>
								</tr>
							</thead>
							<tbody>
								{pagePatients.map((item, index) =>
									<tr key={index} className='cursor-pointer' onClick={() => goPage(history, `patient/${item._id}`)}>
										<td>{(pageNumber - 1) * 10 + index + 1}</td>
										<td>{item.firstName}</td>
										<td>{item.lastName}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
					{patients.length <= 10 ? null
						:
						<>
							<div className='text-center pt-3'>
								{(pageNumber - 1) * 10 + 1} - {(pageNumber - 1) * 10 + pagePatients.length} of {patients.length}
							</div>
							<div className='text-center dentrolux-pagination-icon pt-1'>
								<i onClick={() => firstPage()} className="material-icons">first_page</i>
								<i onClick={() => prevPage()} className="material-icons">navigate_before</i>
								<i onClick={() => nextPage()} className="material-icons">navigate_next</i>
								<i onClick={() => lastPage()} className="material-icons">last_page</i>
							</div>
						</>
					}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentPage: state.admin.currentPage,
	patients: state.patient.patients
})

export default connect(mapStateToProps, { goPage, getPatients })(AdminPatients)