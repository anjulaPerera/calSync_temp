import { AppointmentEP } from "../end-point/appointment_ep";

module.exports = function (app: any) {
  // const AppointmentEndPoint = require("./end-point/appointment_ep");
  app.post("/savedate", AppointmentEP.saveDate);
};
