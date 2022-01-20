import "./ExpenseDate.css";

const ExpenseDate = (myDate) => {
  const month = myDate.expenseData.date.toLocaleString("default", {month: "long",});
  const year = myDate.expenseData.date.getFullYear();
  const date = myDate.expenseData.date.getDate();
  return (
    <div>
      <div className="expense_date">
        <div className="expense_date_month"> {month}</div>
        <div className="expense_date_year"> {year}</div>
        <div className="expense_date_date"> {date}</div>
      </div>
    </div>
  );
};

export default ExpenseDate
