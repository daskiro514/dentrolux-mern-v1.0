const express = require('express')
const router = express.Router()

// MONGO DB MODEL
const User = require('../../models/User')

router.get('/getPatients', async (req, res) => {
  const patients = await User.find({ type: 'customer' })

  res.json({
    success: true,
    patients
  })
})

router.get('/getPatient/:patientID', async (req, res) => {
  const patientID = req.params.patientID
  const patient = await User.findById(patientID)

  res.json({
    success: true,
    patient
  })
})

module.exports = router
