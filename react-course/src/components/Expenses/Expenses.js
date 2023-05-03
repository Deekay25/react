import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("expenses.js");
    console.log(selectedYear);
  };
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
        {props.items.map((expense) => (
          <ExpenseItems t={expense.title} a={expense.amount} d={expense.date} />
        ))}
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
      </Card>
    </div>
  );
}

export default Expenses;
