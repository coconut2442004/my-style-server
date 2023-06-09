const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://nguyentiendat098:LfMB817PTlOLJXMh@cluster0.rv7ojc4.mongodb.net/?retryWrites=true&w=majority",
      {
        connectTimeoutMS: 30000, // thời gian chờ kết nối
        socketTimeoutMS: 30000, // thời gian chờ socket
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.connection.on("error", (error) => console.log(error));
    mongoose.connection.on("open", () => {
      console.log("Connected to MongoDB database.");
    });
  } catch (err) {
    console.log("Connect DB fail with error:", err);
  }
}

module.exports = { connect };
