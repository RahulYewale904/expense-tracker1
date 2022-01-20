// import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/card";

// import Card from './card'

const ExpenseItem = (props) => {
//   // const [item, setDesk] = useState(props.expenseData.item);

//   // // const Handler = () => {
//   // //   setDesk("updated");
//   };

  return (
    <Card className="expense_items">
      <div className="date_item">
        <ExpenseDate expenseData={props.expenseData} />
      </div>

      <div className="expense_item">{props.expenseData.item}</div>
      
      <div className="expense_price">$ {props.expenseData.price}</div>

      {/* <button onClick={Handler}>Click</button> */}
        
    </Card>
  );
};

export default ExpenseItem;
