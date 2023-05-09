import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
// import Expenses from "./Expenses";

function ExpensesList(props) {
// ######################################
// rendered from jsx return now
//   let expensesContent = <p>No expenes found!</p>;
//   if (props.items.length > 0) {
//     expensesContent = props.items.map((expense) => (
//       <ExpenseItems
//         key={expense.id}
//         t={expense.title}
//         a={expense.amount}
//         d={expense.date}
//       />
//     ));
//   }
if (props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
}
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          t={expense.title}
          a={expense.amount}
          d={expense.date}
        />
      ))}
      ;
    </ul>
  );
}

export default ExpensesList;
