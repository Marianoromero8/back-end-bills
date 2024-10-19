const router = require('express').Router()

router.post('/register', (req, res) => {
    res.send('User Create and login')
})
router.post('/login', (req, res) => {
    res.send('User Create and login')
})

router.post('/logout', (req, res) => {
    res.send('User logout')
})

module.exports = router;