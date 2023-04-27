import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
// multi State approach
// using multiple useState like below is more conventional
   const [enteredTitle,setEnteredTitle] = React.useState('')
   const [enteredAmount,setEnteredAmount] = React.useState('')
   const [enteredDate,setEnteredDate] = React.useState('')
//######################################
//  another way to use multiple useState by using just one useState object
//#####################################
  // const [userInput, setUserInput] = React.useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   ennteredDate: '' 
  // });
  // (event) here comes with the function
  const titleChangeHandler = (event) => {
    // console.log("worked!!");
    // ########################################
    // from the browser when you capture event
    // you can open console as you type then open the Object
    // you will see target then value to capture the values
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
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
    // it helps you operate on the latest state snapshot
    // setUserInput((prevState) => {
    //     return  {...prevState, enteredTitle: event.target.value};
    // })
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // #####################################
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // #####################################
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    //event is a default object the browser gives us
    //this will prevent the natural behavior of forms 
    //always when submitted it reloads the page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)

    }
  //  if i ever got confused with below props rewatch vid No. 58
    props.onSaveExpenseData(expenseData)
    // console.log(expenseData)
    //below clear the forms inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    //we add an onSubmit prop to the form itself
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* instead of using onChange i can use on onInput */}
          {/* difference is on input only works on input while on change works on all elements */}
          <input
            type="text"
            value={enteredTitle} //having both value and onChange is called two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-04-30"
            value={enteredDate}
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
