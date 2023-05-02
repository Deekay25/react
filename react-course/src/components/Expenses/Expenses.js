import React, {useState} from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("expenses.js");
    console.log(selectedYear)
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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
    </div>
  );
}

export default Expenses;
