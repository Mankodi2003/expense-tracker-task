const Expense = require('../models/expenseModel');

const getExpenses = async (req, res) => {
    const { month, year } = req.query;
    let query = {};

    if (month && year) {
        query.date = {
            $gte: new Date(`${year}-${month}-01`),
            $lt: new Date(`${year}-${month}-31`),
        };
    }

    const expenses = await Expense.find(query);
    res.json(expenses);
};

const addExpense = async (req, res) => {
    const { description, amount, type, date } = req.body;
    const expense = new Expense({ description, amount, type, date });
    const savedExpense = await expense.save();
    res.json(savedExpense);
};

module.exports = { getExpenses, addExpense };
