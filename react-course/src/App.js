import ExpenseItems from './components/ExpenseItems'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* expenseitems here is called components */}
      {/* the attributes are called props */}
      <ExpenseItems t= {expenses[0].title} a={expenses[0].amount} d={expenses[0].date}></ExpenseItems>
      <ExpenseItems t= {expenses[1].title} a={expenses[1].amount} d={expenses[1].date}></ExpenseItems>
      <ExpenseItems t= {expenses[2].title} a={expenses[2].amount} d={expenses[2].date}></ExpenseItems>
    </div>
  );
}

export default App;
