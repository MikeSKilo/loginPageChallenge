const express = require('express');

const {signup, login, get, update} = require('../controllers/auth.js')
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get("/profile", get);
router.put("/update", update);

module.exports = router;
module.exports = router;
module.exports = router;
