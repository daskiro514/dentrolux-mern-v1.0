import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../actions/admin'

const title = {
  appointments: 'Appointments',
  patients: 'Patients',
  promotions: 'Promotions',
  faq: 'FAQs/Questions',
}

const AdminHeader = ({ currentPage, setCurrentPage }) => {
  React.useEffect(() => {
  }, [])

  return (
    <div className='row admin-header align-items-center py-4'>
      <div className='col-md-4'>
        <div className='d-flex flex-row'>
          <div className='logo py-2'>{title[currentPage]}</div>
        </div>
      </div>
      <div className='col-md-8'>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { setCurrentPage })(AdminHeader)