import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItems
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
      />
    </Card>
  );
}

export default Expenses;
