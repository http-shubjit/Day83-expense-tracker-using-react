import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props) =>{

const saveExpenseFormdatahandler = (receivEFdata) =>{

const Newexpensedata={...receivEFdata}
    
// console.log(Newexpensedata)
props.NE_FUNCTION(Newexpensedata)//NE:new expense function

}
return(
 <div className="new-expense">
<ExpenseForm EF_Function={saveExpenseFormdatahandler}/>
 </div>   
);
}
export default NewExpense;