const router = require('express').Router();
const { addSpent } = require('../controllers/addSpent');
const { history } = require('../controllers/history');

router.post('/addSpent', addSpent)

router.get('/history', history)

router.get('/:id', (req, res) => {
    res.send('Get spent by id')
})
router.put('/:id', (req, res) => {
    res.send('Edit spent by id')
})
router.delete('/:id', (req, res) => {
    res.send('Delete spent by id')
})

module.exports = router;