const express = require('express');
const { getExpenses, addExpense } = require('../controllers/expenseController');

const router = express.Router();

router.route('/').get(getExpenses).post(addExpense);

module.exports = router;
