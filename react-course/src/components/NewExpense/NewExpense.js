import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing,setIsEditing] = React.useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    // this data is coming from App.js
    props.onAddExpense(expenseData);

    // here this will return back to the add new expense button after saving
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* checks if isEditing is True then display the button */}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}


      {/* onSaveExpenseData is custom made by 
      me in order to make child to parent component
      communication possible */}
      {/* saving the compoent name with 'on' in the beginning is by convvention */}
      {/* check if isEditing is false and display the form */}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
