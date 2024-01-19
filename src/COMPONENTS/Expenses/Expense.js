import './Expense.css'
import ExpenseDate from './ExpenseDate';
import '../UI/Card.css'
import React,{useState} from 'react';
const Expense=(props) => {

return(
    <div className='expense-item'>
       <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
      <h2 > {props.tittle} </h2>
      <div className='expense-item__price'>{"$"+props.amount}</div>
      </div>
     
    </div>
);
}
export default Expense;