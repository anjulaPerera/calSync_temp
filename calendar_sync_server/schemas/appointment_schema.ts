const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let AppointmentSchema = new mongoose.Schema({
  appointmentTime: {
    type: Schema.Types.Date,
    require: true,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = { Appointment };
