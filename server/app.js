
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

require('dotenv').config()

const app = express()
const Router = express.Router()
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium-clone'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

try{
  mongoose.connect(MONGO_URL, {})
}
catch(err){
  console.error(err)
}

const PORT = process.env.PORT || 5000

routes(Router)

app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use('/api', Router)

app.listen(PORT, () => {
  console.log('Server listening on ' + PORT)
})