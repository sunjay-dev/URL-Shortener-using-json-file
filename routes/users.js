const express = require('express');

const { CreateCustomUrl } = require('../controllers/CreateCustomUrl.js');
const { getDetails } = require('../controllers/getDetails.js');
const { redirectUrl } = require('../controllers/redirectUrl.js');
const { createUrl } = require('../controllers/createUrl.js');

const router = express.Router();


router.get('/details', getDetails)

router.get('/:p', redirectUrl);

router.post('/', createUrl)

router.post('/custom', CreateCustomUrl)

module.exports= router;
