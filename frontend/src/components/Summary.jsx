import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Summary = () => {
    const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });

    useEffect(() => {
        const fetchSummary = async () => {
            const { data } = await axios.get('http://localhost:5000/api/expenses');
            const income = data.filter((exp) => exp.type === 'income').reduce((acc, cur) => acc + cur.amount, 0);
            const expense = data.filter((exp) => exp.type === 'expense').reduce((acc, cur) => acc + cur.amount, 0);
            setSummary({ income, expense, balance: income - expense });
        };
        fetchSummary();
    }, []);

    return (
        <div>
            <h2>Summary</h2>
            <p>Total Income: ${summary.income}</p>
            <p>Total Expense: ${summary.expense}</p>
            <p>Balance: ${summary.balance}</p>
        </div>
    );
};

export default Summary;
