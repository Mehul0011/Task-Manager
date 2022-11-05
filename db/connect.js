const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useMongoClient:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB;