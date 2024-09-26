const router = require('express').Router();

router.post('/addSpent', (req, res) => {
    res.send('Add spent')
})
router.get('/history', (req, res) => {
    res.send('Get history spents')
})
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