import {useState} from 'react'
import Card from "../Card/card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ expenseData }) => {

  const [filteredYear,setfilteredYear] = useState("2020");

  const updatefilteredyear = (year)=>{
    console.log("inside Expenses")
    console.log(year);
    setfilteredYear(year);
  }

  let filteredRecords= expenseData.filter((exp)=>{
    return exp.date.getFullYear().toString()===filteredYear.toString();
  })

  

 

  return (
    <Card className="expenses">
      <ExpenseFilter updatefilteredyear ={updatefilteredyear} filteredYear=
      {filteredYear}/>

      <ExpenseChart filteredRecords={filteredRecords}/>


      
      <ExpensesList filteredRecords= {filteredRecords}/>
    </Card>
  );
};
export default Expenses;
