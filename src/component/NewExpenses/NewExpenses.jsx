import React, { useState } from 'react'
import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css'


const NewExpenses = (props)=>{

    const getNewExpenseData = (d)=>{
        // alert("Hi From </NewExpense>")
        // console.log(d)
        props.readExpenseData(d);
    }
    const[showExpenseForm, setShowExpenseform] = useState(false);
    return(
        <div className="new_Expenses">
            {!showExpenseForm && <button onClick={()=>setShowExpenseform(true)}> Add Expenses</button>}
            {showExpenseForm && <ExpenseForm  sendData= {getNewExpenseData} setShowExpenseform={setShowExpenseform}/>}

        </div>
    )
}

export default NewExpenses