import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const { data } = await axios.get('http://localhost:5000/api/expenses');
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id}>
                        {expense.description} - ${expense.amount} ({expense.type})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
