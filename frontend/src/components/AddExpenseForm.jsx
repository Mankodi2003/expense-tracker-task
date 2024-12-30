import React, { useState } from 'react';
import axios from 'axios';

const AddExpenseForm = () => {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        type: 'income',
        date: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/expenses', formData);
        alert('Expense added!');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                onChange={handleChange}
                required
            />
            <select name="type" onChange={handleChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="date" name="date" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddExpenseForm;
