import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    // this data is coming from App.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* onSaveExpenseData is custom made by 
      me in order to make child to parent component
      communication possible */}
      {/* saving the compoent name with 'on' in the beginning is by convvention */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
