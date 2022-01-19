import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerSidebar from './CustomerSidebar'

import CustomerAppointments from './CustomerAppointments'
import CustomerAppointmentCreate from './CustomerAppointmentCreate'
import CustomerNotes from './CustomerNotes'
import CustomerFaq from './CustomerFaq'
import CustomerPromotion from './CustomerPromotion'
import CustomerAppointmentEdit from './CustomerAppointmentEdit'

const Customer = () => {
  React.useEffect(() => {
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <CustomerSidebar />
        <div className='col-lg-10 col-md-9'>
          <Router basename="/dashboard">
            <Route exact path='/'>
              <Redirect to='/appointments' />
            </Route>
            <PrivateRoute exact path="/appointments" component={CustomerAppointments} />
            <PrivateRoute exact path="/appointment-create" component={CustomerAppointmentCreate} />
            <PrivateRoute exact path="/appointment-edit/:id" component={CustomerAppointmentEdit} />
            <PrivateRoute exact path="/notes" component={CustomerNotes} />
            <PrivateRoute exact path="/promotions" component={CustomerPromotion} />
            <PrivateRoute exact path="/faq" component={CustomerFaq} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Customer)