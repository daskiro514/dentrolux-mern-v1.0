import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../../actions/auth'
import { setAlert } from '../../actions/alert'
import { Redirect } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const Register = ({ register, setAlert, isAuthenticated }) => {
  const history = useHistory()
  const [isUploading, setIsUploading] = React.useState(false)

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    rpassword: '',
    birth: '',
    age: 1,
    sex: 'man',
    address: '',
    city: '',
    state: '',
    zip: '',
  })

  const { name, email, password, rpassword, birth, age, sex, address, city, state, zip } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    setIsUploading(true)
    if (password !== rpassword) {
      setAlert('Password is not matched. Please check again.', 'warning')
      return;
    }
    register(formData, history)
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='container-fluid bg-Client'>
      <div className='row'>
        <div className='col-lg-12 p-3'>
          <div className='register px-4'>
            <div className='h3 py-2'>
              Customer Registration
            </div>
            {isUploading
              ?
              <Spinner />
              :
              <form className='form' onSubmit={onSubmit}>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Confirm Password</label>
                      <input
                        type='password'
                        className='form-control'
                        name='rpassword'
                        value={rpassword}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Date of Birth</label>
                      <input
                        type='date'
                        className='form-control'
                        name='birth'
                        value={birth}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Age</label>
                      <input
                        type='number'
                        min={1}
                        className='form-control'
                        name='age'
                        value={age}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Sex</label>
                      <select
                        className='form-control'
                        name='sex'
                        value={sex}
                        onChange={onChange}
                        required
                      >
                        <option value='man'>man</option>
                        <option value='woman'>woman</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        name='address'
                        value={address}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>City</label>
                      <input
                        type='text'
                        className='form-control'
                        name='city'
                        value={city}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>State</label>
                      <input
                        type='text'
                        className='form-control'
                        name='state'
                        value={state}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Zip Code</label>
                      <input
                        type='text'
                        className='form-control'
                        name='zip'
                        value={zip}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group pt-3 float-right'>
                  <button type='submit' className='form-control'>
                    Submit
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, setAlert })(Register)