import "./ExpenseItems.css";
// you name the function as the file name by convetion
function ExpenseItems(props) {
    const month = props.d.toLocaleString('en-US', { month: 'long' })
    const day = props.d.toLocaleString('en-US', { day: '2-digit' })
    const year = props.d.getFullYear();
    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.t}</h2>
          <div className="expense-item__price">${props.a}</div>
        </div>
      </div>
    );
}

export default ExpenseItems;
