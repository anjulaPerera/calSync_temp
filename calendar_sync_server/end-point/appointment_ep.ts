const { Appointment } = require("../schemas/appointment_schema");
import { DAppointment } from "./../models/appointment_model";

export namespace AppointmentEP {
  export function saveDate(req: any, res: any) {
    const appointmentData: DAppointment = {
      appointmentTime: req.body.meetingTime,
    };
    console.log(appointmentData);
    console.log(req.body);

    const appointment = new Appointment(appointmentData);
    appointment.save((err: any, _doc: any) => {
      if (err) {
        return res.status(422).json({
          success: false,
          message: "saving failed!",
          data: err,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Successfully saved",
          // data:err
        });
      }
    });
  }

  export function getAllAppointments(req: any, res: any) {
    Appointment.find({}, (err: any, doc: any) => {
      if (err) {
        return res.status(422).json({
          success: false,
          message: "Error while fetching appointments",
          data: err,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Successfully fetched appointments",
          data: doc,
        });
      }
    });
  }
}
