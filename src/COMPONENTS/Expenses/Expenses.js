import './Expenses.css'
import Expense from './Expense';
import Card from '../UI/Card';
import '../UI/Card.css'
import React from 'react';


const Expenses=(props) => {
    return (
        <div className='expenses' >
            {
              props.item.map(
                (expense) =>(
                    <Expense  
                    date={expense.date} 
                    tittle={expense.tittle} 
                    amount={expense.amount}
                 />
                )
               )  
               }
           
    </div>
    );
}
export default Expenses;