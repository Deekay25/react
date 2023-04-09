import ExpenseItems from './ExpenseItems'
import './Expenses.css'
function Expenses(props) {
    return (
        <div className='expenses'>
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
        </div>
    );
}

export default Expenses;