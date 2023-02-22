// const mongoose = require("mongoose");
// import { Types } from "mongoose";

interface Common {
  appointmentTime: Date;
}

export interface DAppointment extends Common {}

// export interface IAppointment extends Common, mongoose.Document {
//   _id: mongoose.Types.ObjectId;
// }
