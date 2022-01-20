import { useState } from "react"
import "./ExpenseFilter.css"
const ExpenseFilter = (props)=>{
    

    return(
        <div className="expense_filter">
            <h4>Filter By Year</h4>
            
                <select onChange={(e)=>props.updatefilteredyear(e.target.value)} value={props.filteredYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
        </div>
    )
}

export default ExpenseFilter