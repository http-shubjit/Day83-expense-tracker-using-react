import React,{ useState }from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{

const [entertitle,setentertitle]=useState('')
const [enteramount,setamount]=useState('')
const [enterdate,setdate]=useState('')
const titlechangehandler= (event) =>{
setentertitle(event.target.value)

}

const amountchangehandler= (event) =>{
   setamount(event.target.value)
}


const datechangehandler= (event) =>{
    setdate(event.target.value)
}
const submithandler = (event) =>{
event.preventDefault();

const ExpenseFormdata={
    id:Math.round().toString(),
    tittle: entertitle,
    amount: enteramount,
    date: new Date(enterdate)
}
//  ****** this onsaveExpensedate() is used to send the expensedata object from child file or this to its parent file or new expense.js file
// console.log(expensedata)
props.EF_Function(ExpenseFormdata)//EF:Expense Function

// *** use for blank the form ****
setentertitle('');
setamount('');
setdate('');
}
return(
<form onSubmit={submithandler}>
<div className="new-expense__controls">

<div className="new-expense__controls">
    <label>Title</label>
    <input type="text" value={entertitle} onChange={ titlechangehandler }/>
</div>
<div className="new-expense__controls">
    <label>Amount</label>
    <input type="number" min="0.01" step="0.01" value={enteramount} onChange={amountchangehandler}/>
</div>
<div className="new-expense__controls">
    <label>Date</label>
    <input type="date" value={enterdate} onChange={datechangehandler}/>
</div>

<div className="new-expense__controls">
<button type="submit">Add Expense</button>
</div>
</div>
</form>
      
    );

}
export default ExpenseForm;