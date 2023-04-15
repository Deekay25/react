import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
// multi State approach
// using multiple useState like below is more conventional
//    const [enteredTitle,setEnteredTitle] = React.useState('')
//    const [enteredAmount,setEnteredAmount] = React.useState('')
//    const [enteredDate,setEnteredDate] = React.useState('')
//######################################
//  another way to use multiple useState by using just one useState object
//#####################################
  const [userInput, setUserInput] = React.useState({
    enteredTitle: '',
    enteredAmount: '',
    ennteredDate: '' 
  });
  // (event) here comes with the function
  const titleChangeHandler = (event) => {
    // console.log("worked!!");
    // ########################################
    // from the browser when you capture event
    // you can open console as you type then open the Object
    // you will see target then value to capture the values
    // console.log(event.target.value);
    // setEnteredTitle(event.target.value);
    // #########################################
    // using the new way
    // if leave it with just entered title it means the other two
    // amount and date will be lost as soons as title has been executed
    // to fix spread userInput
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    // #########################################
    // a better version of the new way (though they always works the same)
    // always remember if your state object depends on the previous state always use this
    // setUserInput((prevState) => {
    //     return  {...prevState, enteredTitle: event.target.value};
    // })
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    // setEnteredAmount(event.target.value);
    // #####################################
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    // setEnteredDate(event.target.value);
    // #####################################
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* instead of using onChange i can use on onInput */}
          {/* difference is on input only works on input while on change works on all elements */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-04-30"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
