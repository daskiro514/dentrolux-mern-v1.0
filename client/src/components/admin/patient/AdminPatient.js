import React from 'react'
import { connect } from 'react-redux'

const data = {
  date: '10/14/2019',
  subject: 'Root Canal',
  notes: 'Attempted root canal treatment on tooth 15. Examination of the X-ray revealed that the canal has closed off. The patient has been informed that the tooth can  either be extracted and crowned or have a post and core and be crowned. A treatment plan is being determined.'
}

const AdminPatient = ({ goPage }) => {
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
                type='button'
                className='btn border rounded-lg box-shadow p-1 px-3 text-center'
                style={{ outline: 'none' }}
                value='Setup Appointment'
              />
            </span>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='box-shadow rounded-lg'>
            <div className='client-info mb-5 p-3'>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>First Name:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>Gordon</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Last Name:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>Ramsey</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Email:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>gramsey14@gmail.com</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div>
                    <div className='text-left mb-1 font-20'>Phone Number:</div>
                  </div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>404 547 5493</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Address:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>180 Jackson Street NE Draper Utah 84020</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Sex:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>Female</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Date of Birth:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>01/03/1994</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Age:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>27</div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Last Visit:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>05/11/2020</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='text-left mb-1 font-20'>Next Appointment:</div>
                </div>
                <div className='col-sm-7 pl-4'>
                  <div className='text-left mb-1 font-20'>11/14/2021</div>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th style={{minWidth: '140px'}}>Date</th>
                    <th style={{minWidth: '180px'}}>Subject</th>
                    <th style={{minWidth: '500px'}}>Notes</th>
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

})

export default connect(mapStateToProps, {})(AdminPatient)