const mongoose = require('mongoose')

const programmeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  titre: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  dateSeance: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  domaine: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  }
})

// programmeSchema.index({ code: 1, college: 1 }, { unique: true }) 

module.exports = mongoose.model('Programme', programmeSchema,"programmes")