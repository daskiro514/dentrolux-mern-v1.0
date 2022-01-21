import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../actions/note'
import { _formatDate } from '../../utils/formatDate1'
import { useHistory } from 'react-router-dom'

const AdminNoteCreate = ({ match, createNote }) => {
  const history = useHistory()
  const patientID = match.params.patientID

  const [date, setDate] = React.useState(_formatDate(new Date()))
  const [subject, setSubject] = React.useState('')
  const [note, setNote] = React.useState('')

  const onSubmit = e => {
    e.preventDefault()
    createNote({
      date,
      subject,
      note,
      customer: patientID
    }, history)
  }

  return (
    <div className='admin-dashboard'>
      <div className='row admin-header align-items-center py-2'>
        <div className='col-md-12 py-2'>
          <div className='d-flex flex-row'>
            <div className='logo py-2'>New Note</div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <div className='box-shadow p-3 m-1 mb-3 position-relative rounded-lg'>
            <form className='form' onSubmit={onSubmit}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <label>Date</label>
                    <input
                      type='date'
                      className='form-control bg-light'
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Subject</label>
                    <input
                      className='form-control bg-light'
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Note</label>
                    <textarea
                      rows={5}
                      className='form-control bg-light'
                      value={note}
                      onChange={e => setNote(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group pt-3 float-right'>
                    <button type='submit' className='form-control dentrolux-bg-primary text-white'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { createNote })(AdminNoteCreate)