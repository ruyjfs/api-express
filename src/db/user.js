const mongoose = require('./')
const { Schema } = mongoose

module.exports = new mongoose.model(
  'User',
  Schema({
    name: {
      type: String,
      required: true
    },
    date: Date
  })
)