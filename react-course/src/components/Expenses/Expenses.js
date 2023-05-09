import React, { useState } from "react";
// import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("expenses.js");
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // toString() converts the date back to a string
    // this means return the date if it equals the filtered year
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // ###############################################################
  // Logic moved to a new component ExpensesList and got tweaked
  // let expensesContent = <p>No expenes found!</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItems
  //       key={expense.id}
  //       t={expense.title}
  //       a={expense.amount}
  //       d={expense.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        {/* this component controls the expensesfilter compoent and this makes the  */}
        {/* expensesfilter component a dumb, uncontrolled or stateless component */}
        {/* while this component expense.js a controlled, stateful or smart component */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* ############################################### */}
        {/* this approach you have your logic outside the returned jsx
        so you can you can point to it as seen below it helps keeps your 
        jsx code lean */}
        {/* {expensesContent} moved to ExpensesList component */}
        {/* ###############################################
        using js trick to check for the length
        the expression evaluate both statements if con
        dition has matched it returned the last statements
        ############################################### */}
        {/* {filteredExpenses.length === 0 && <p>No expenses Found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            t={expense.title}
            a={expense.amount}
            d={expense.date}
          />
        ))} */}
        {/* ###############################################
        using turnary operator to check for the length
        using traditional forloop or if statements not
        accepted in jsx
        ############################################### */}
        {/* {filteredExpenses.length === 0 ? <p>No expenses Found</p> : filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            t={expense.title}
            a={expense.amount}
            d={expense.date}
          />
        ))} */}

        {/* we now map the filtred array instead of props.items */}
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            t={expense.title}
            a={expense.amount}
            d={expense.date}
          />
        ))} */}
        {/* ########################################## */}
        {/* {props.items.map((expense) => (
          <ExpenseItems
            key={expense.id}
            t={expense.title}
            a={expense.amount}
            d={expense.date}
          />
        ))} */}
        {/* ########################################## */}
        {/* <ExpenseItems
          t={props.items[0].title}
          a={props.items[0].amount}
          d={props.items[0].date}
        />
        <ExpenseItems
          t={props.items[1].title}
          a={props.items[1].amount}
          d={props.items[1].date}
        />
        <ExpenseItems
          t={props.items[2].title}
          a={props.items[2].amount}
          d={props.items[2].date}
        />
        <ExpenseItems
          t={props.items[3].title}
          a={props.items[3].amount}
          d={props.items[3].date}
        /> */}
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
