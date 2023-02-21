import mongoose from "mongoose";
const mongoURL = process.env.MONGOOSE_URI || "";

mongoose.set("strictQuery", false);
async function databaseSetup() {
  mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  });
}

module.exports = databaseSetup;
