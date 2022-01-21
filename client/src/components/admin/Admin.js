import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminSidebar from './AdminSidebar'

import AdminPatients from './AdminPatients'
import AdminPatient from './AdminPatient'
import AdminAppointments from './AdminAppointments'
import AdminPromotion from './AdminPromotion'
import AdminFaq from './AdminFaq'
import AdminNoteCreate from './AdminNoteCreate'
import AdminNoteEdit from './AdminNoteEdit'

const Admin = () => {
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
            <PrivateRoute exact path="/note-create/:patientID" component={AdminNoteCreate} />
            <PrivateRoute exact path="/note-edit/:patientID" component={AdminNoteEdit} />
            <PrivateRoute exact path="/appointments" component={AdminAppointments} />
            <PrivateRoute exact path="/promotions" component={AdminPromotion} />
            <PrivateRoute exact path="/faq" component={AdminFaq} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Admin)