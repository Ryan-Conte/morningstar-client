var express = require('express');
var Main = require('../Controllers/mainController');

const router = express.Router();

router.route('/company').get(Main.getCompanies);
router.route('/company/:ticker').get(Main.getCompanies);

router.route('/holdings/:ticker').get(Main.getHoldings);
// router.route('/*').get(Main.get404);

module.exports = router;
