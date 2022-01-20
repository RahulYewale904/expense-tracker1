
// import './App.css';
import { useState } from 'react';
import Expenses from './component/ExpenseItem/Expenses'
// import Card from './component/ExpenseItem/card'
import NewExpenses from './component/NewExpenses/NewExpenses'

function App() {
  const dummyData =[
    {
      id:"exp1",
      date:new Date(2021, 5, 12),
      item:"New TV",
      price:799.49

    },
    {
      id:"exp2",
      date:new Date(2021, 2, 12),
      item:"Car Insurance",
      price:294.76

    },
    {
      id:"exp3",
      date:new Date(2021, 2, 28),
      item:"New Desk(wooden)",
      price:450.01

    },
    {
      id:"exp4",
      date:new Date(2022, 1, 5),
      item:"New Laptop",
      price:850.50

    }
    
  ];

  const [expenseData, setExpenseData]= useState(dummyData)

  const getNewExpenseRecord = (d)=>{
    // alert("Hi From </App>")
    console.log(d)
    setExpenseData((exp) => [d, ...exp])
  }

  return (
    <div>
      <NewExpenses readExpenseData={getNewExpenseRecord } />
     <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
