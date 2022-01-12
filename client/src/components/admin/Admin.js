import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminSidebar from './AdminSidebar'

import AdminPatients from './patient/AdminPatients'
import AdminPatient from './patient/AdminPatient'
import AdminAppointment from './appointment/AdminAppointment'
import AdminPromotion from './AdminPromotion'
import AdminFaq from './AdminFaq'

const Admin = ({ currentPage }) => {
  React.useEffect(() => {
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <AdminSidebar />
        <div className='col-lg-10 col-md-9'>
          <Router basename="/dashboard">
            <Route exact path='/'>
              <Redirect to='/patients' />
            </Route>
            <PrivateRoute exact path="/patients" component={AdminPatients} />
            <PrivateRoute exact path="/patient/:id" component={AdminPatient} />
            <PrivateRoute exact path="/appointments" component={AdminAppointment} />
            <PrivateRoute exact path="/promotions" component={AdminPromotion} />
            <PrivateRoute exact path="/faq" component={AdminFaq} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, {})(Admin)