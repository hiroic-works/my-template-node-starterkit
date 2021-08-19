const router = require('express').Router();

router
// TOPページ
.get('/', (req, res) => {
    const data = {
        name: "index",
        title: 'index title',
        description: 'index description',
    }
    res.render('index', data)
})
// aboutページ
.get('/about', (req, res) => {
    const data = {
        name: "about",
        title: 'about title',
        description: 'about description',
    }
    res.render('about', data)
})

module.exports = router;