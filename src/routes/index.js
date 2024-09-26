const router = require('express').Router()
const authRoutes =  require('./authRoutes.js');
const spentsRoutes = require('./spentRoutes.js');

router.use('/auth', authRoutes)
router.use('/spent', spentsRoutes)

module.exports = router;