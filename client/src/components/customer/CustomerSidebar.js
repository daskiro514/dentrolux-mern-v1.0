import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { setCurrentPage } from '../../actions/admin'

const AdminSidebar = ({ user, logout, setCurrentPage, currentPage }) => {
  let history = useHistory()

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-lg-2 col-md-3 sidebar p-0'>
      <div className='container-fluid p-0'>
        <div className='account-balance'>
          <div className='d-flex flex-column w-100 px-3 py-3 user-logo'>
            {/* <img src='/logo.png' alt='logo' /> */}
            <img src={user.avatar} className='rounded-circle' width='60px' alt='PROFILE' />
            <div className="text-center mt-2">{user.name}</div>
          </div>
        </div>

        <div className='p-2 pt-3 mt-2'>
          <div className={'row mx-1 menuItem rounded p-1 cursor-pointer ' + (currentPage === 'appointments' ? 'selected' : '')} onClick={() => goPage('appointments')}>
            <div className='d-flex align-items-center justify-content-between'>
              <i className="material-icons mr-4">date_range</i>
              <div className='p mb-0'>Appointments</div>
            </div>
          </div>

          <div className={'row mx-1 menuItem rounded p-1 cursor-pointer mt-1 ' + (currentPage === 'notes' ? 'selected' : '')} onClick={() => goPage('notes')}>
            <div className='d-flex align-items-center justify-content-between'>
              <i className="material-icons mr-4">event_note</i>
              <div className='p mb-0'>Notes</div>
            </div>
          </div>

          <div className={'row mx-1 menuItem rounded p-1 cursor-pointer mt-1 ' + (currentPage === 'promotions' ? 'selected' : '')} onClick={() => goPage('promotions')}>
            <div className='d-flex align-items-center justify-content-between'>
              <i className="material-icons mr-4">star</i>
              <div className='p mb-0'>Promotions</div>
            </div>
          </div>

          <div className={'row mx-1 menuItem rounded p-1 cursor-pointer mt-1 ' + (currentPage === 'faq' ? 'selected' : '')} onClick={() => goPage('faq')}>
            <div className='d-flex align-items-center justify-content-between'>
              <i className='far fa-question-circle mr-4' style={{ fontSize: '24px' }}></i>
              <div className='p mb-0'>FAQs/Questions</div>
            </div>
          </div>
        </div>

        <div className='signoutLink top-border p-2 pt-3'>
          <div className={'row mx-1 menuItem rounded p-1 cursor-pointer ' + (currentPage === 'settings' ? 'selected' : '')} onClick={() => goPage('settings')}>
            <div className='d-flex align-items-center'>
              <i className="material-icons mr-4">settings</i>
              <div>Settings</div>
            </div>
          </div>
          <div className='row mx-1 menuItem rounded p-1 cursor-pointer' onClick={() => {
            setCurrentPage('dashboard')
            logout()
          }}>
            <div className='d-flex align-items-center'>
              <i className="material-icons mr-4">call_missed_outgoing</i>
              <div>Sign Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(AdminSidebar)
