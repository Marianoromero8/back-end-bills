const router = require('express').Router()

router.post('/register', (res, req) => {
    res.send('User Create and login')
})
router.post('/login', (res, req) => {
    res.send('User Create and login')
})

router.post('/logout', (res, req) => {
    res.send('User logout')
})

module.exports = router;