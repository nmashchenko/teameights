// * Modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// * Routes
const router = require('./routes/index');

// * Middlewares
const errorMiddleware = require('./middlewares/error.middleware')

// * Config
const appConfig = require('./app/app.config')

const PORT = appConfig.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

// this app.use should be always last app.use to handle errors, please never put something below \/
app.use(errorMiddleware);
// this app.use should be always last app.use to handle errors, please never put something below /\

const start = async () => {
  try {
    await mongoose.connect(appConfig.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()


