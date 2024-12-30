import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Summary from '../components/Summary';

const Home = () => {
    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <AddExpenseForm />
            <Summary />
            <ExpenseList />
        </div>
    );
};

export default Home;
