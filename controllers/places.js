const router = require('express').Router()

//router.get('/', (req, res) => {
    //res.render('GET /places')
//})

app.get('/', (req, res) => {
    res.render('places/index')
  })
  
module.exports = router
