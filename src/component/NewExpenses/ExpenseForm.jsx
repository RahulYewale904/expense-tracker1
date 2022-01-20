import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("Rahul");
  const [price, setPrice] = useState("0");
  const [date, setDate] = useState(new Date());

  // const [data, setData] = useState({

  //   title:"Rahul",
  //   price:0,
  //   date:""
  // });

  // let changetitle = (event) => {
  //   // setData({...data,title: event.target.value});
  //   setTitle(event.target.value)
    
  // };

  const handler =(e)=>{
    e.preventDefault();
    // alert("button clicked")
    // console.log(title,price,date)

    // const data1 = {
    //   title:data.title,
    //   price:data.price,
    //   date:data.date
    // }

    const data = {
      id:Math.random().toString(),
      item:title,
      price:price,
      date:new Date(date)
    }
    // console.log(data1.title)
    props.sendData(data);
    // alert("submitted successfully");
    // console.log(data)
    setTitle("");
    setPrice("0");
    setDate();

    props.setShowExpenseform(false);
    // console.log(data.title,data.price,data.date)
    // console.log(data1.title,data1.price,data1.date)
  }


  return (
    // <div>
      <form onSubmit={handler} >
        <div className="expense_form">
        <div className="new_expense">
          <label>Title</label>
          <input type="text" onChange={(event)=>setTitle(event.target.value)} value={title}/>
        </div>
        <div className="new_expense">
          <label>Price</label>
          {/* <input type="number" onChange={(event)=>setData({...data,price: event.target.value})} value={data.price} /> */}
          <input type="number" onChange={(event)=>setPrice(event.target.value)} value={price} />
        </div>
        <div className="new_expense">
          <label>Date</label>
          {/* <input type="date" onChange={(event)=>setData({...data,date: event.target.value})} /> */}
          <input type="date" onChange={(event)=>setDate(event.target.value)} value={date} />
        </div>
        </div>

        <div className="new_expense_button">
        <button type="button" onClick={()=>{props.setShowExpenseform(false)}} >
          cancel
        </button>
        <button type="submit"  >
          Add Expense
        </button>
      </div>
      </form>
    // {/* </div> */}
  );
};
export default ExpenseForm;
