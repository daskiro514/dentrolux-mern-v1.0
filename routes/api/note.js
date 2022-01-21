const express = require('express')
const router = express.Router()

// MONGO DB MODEL
const Note = require('../../models/Note')

router.post('/createNote', async (req, res) => {
  const newNote = new Note({
    ...req.body
  })

  await newNote.save()

  res.json({
    success: true
  })
})

router.get('/getCustomerNotes/:userID', async (req, res) => {
  const userID = req.params.userID
  const notes = await Note.find({ customer: userID }).populate('customer')

  res.json({
    success: true,
    notes
  })
})

router.get('/getNote/:noteID', async (req, res) => {
  const noteID = req.params.noteID
  const note = await Note.findById(noteID)

  res.json({
    success: true,
    note
  })
})

router.post('/updateNote/:noteID', async (req, res) => {
  const noteID = req.params.noteID
  await Note.findByIdAndUpdate(noteID, {
    ...req.body
  }, { new: true })

  res.json({
    success: true
  })
})

router.delete('/deleteNote/:noteID', async (req, res) => {
  await Note.findByIdAndDelete(req.params.noteID)

  res.json({
    success: true
  })
})

module.exports = router
