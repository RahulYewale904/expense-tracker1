import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props)=>{

    if(props.filteredRecords.length ===0){
        return <h2 className="expenses_list_fallback"> No Data found</h2>

    }

    // if(props.filteredRecords.length>0){
    //     records= 
    
    //   } 
    return(
        <ul className="expenses_list">
            { props.filteredRecords.map(row => {
          return <ExpenseItem key={row.id} expenseData={row} />;
        }
        ) }

        </ul>
    )
}

export default ExpensesList