const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the landing page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the home route
router.get('/home', (req, res) => {
  res.send('About birds')
})

// define the about route
router.get('/login', (req, res) => {
    res.send('login')
  })


// define the register route
router.get('/register', (req, res) => {
    res.send('register')
  })
// define the nutrition route
router.get('/nutrition', (req, res) => {
    res.send('nutrition')
  })
    

module.exports = router