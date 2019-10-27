var express = require('express')
var router = express.Router()

router.get('/cobb', (req, res) => {
	res.json('Cobb')
})

module.exports = router