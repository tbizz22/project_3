
require('dotenv').config()
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
// const { CLIENT_ORIGIN } = require('./config')

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  })

module.exports = {
    create: function(req, res) {
        const values = Object.values(req.files)
        const promises = values.map(image => cloudinary.uploader.upload(image.path))

        Promise
            .all(promises)
            .then(results=> res.json(results))
            .catch((err) => res.status(400).json(err))
        
        
    }
};