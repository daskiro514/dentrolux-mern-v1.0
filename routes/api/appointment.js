const express = require('express')
const router = express.Router()

// MONGO DB MODEL
const Appointment = require('../../models/Appointment')

router.post('/createAppointment', async (req, res) => {
  const newAppointment = new Appointment({
    ...req.body
  })

  await newAppointment.save()

  res.json({
    success: true
  })
})

router.get('/getAllAppointments', async (req, res) => {
  const appointments = await Appointment.find().populate('customer')

  res.json({
    success: true,
    appointments
  })
})

router.get('/getCustomerAppointments/:userID', async (req, res) => {
  const userID = req.params.userID
  const appointments = await Appointment.find({ customer: userID }).populate('customer')

  res.json({
    success: true,
    appointments
  })
})

router.get('/getAppointment/:appointmentID', async (req, res) => {
  const appointmentID = req.params.appointmentID
  const appointment = await Appointment.findById(appointmentID)

  res.json({
    success: true,
    appointment
  })
})

router.get('/getNextAppointment/:patientID', async (req, res) => {
  const patientID = req.params.patientID
  const appointments = await Appointment.find({ customer: patientID })
  const appointment = appointments[appointments.length - 1]

  res.json({
    success: true,
    appointment
  })
})

router.post('/updateAppointment/:appointmentID', async (req, res) => {
  const appointmentID = req.params.appointmentID

  await Appointment.findByIdAndUpdate(appointmentID, {
    ...req.body
  }, { new: true })

  res.json({
    success: true
  })
})

router.get('/approveAppointment', async (req, res) => {
  const appointmentID = req.query.appointmentID
  const approvedTime = req.query.time

  await Appointment.findByIdAndUpdate(appointmentID, {
    status: 'Approved',
    approvedTime
  }, { new: true })

  res.json({
    success: true
  })
})

router.get('/denyAppointment/:appointmentID', async (req, res) => {
  const appointmentID = req.params.appointmentID

  await Appointment.findByIdAndUpdate(appointmentID, {
    status: 'Denied',
    approvedTime: null
  }, { new: true })

  res.json({
    success: true
  })
})

router.delete('/deleteAppointment/:appointmentID', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.appointmentID)

  res.json({
    success: true
  })
})

module.exports = router
