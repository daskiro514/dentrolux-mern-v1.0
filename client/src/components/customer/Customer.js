import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerSidebar from './CustomerSidebar'

import CustomerAppointment from './CustomerAppointment'
import CustomerNotes from './CustomerNotes'
import CustomerFaq from './CustomerFaq'
import CustomerPromotion from './CustomerPromotion'

const Customer = ({ setAlert, getMessages, getAdminUnreadMessages }) => {
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
            <PrivateRoute exact path="/appointments" component={CustomerAppointment} />
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