import Expenses from "./COMPONENTS/Expenses/Expenses";

import NewExpense from "./COMPONENTS/NewExpense/NewExpense";
import React,{useState} from "react";
let Dummy_expense=[
    {
        id:'e1',
        tittle:'school fee',
        amount:250,
        date: new Date(2023,11,13)
    },
    {
        id:'e2',
        tittle:'book fee',
        amount:200,
        date: new Date(2023,11,3)
    },
    {
        id:'e3',
        tittle:'room fee',
        amount:200,
        date: new Date(2023,11,1)
    },
    {
        id:'e4',
        tittle:'college fee',
        amount:200,
        date: new Date(2023,11,10)
    } 
    ];
const App=() =>{

const [expenses,setexpenses]=useState(Dummy_expense)

const savenewexpensedatahandler = (expense) =>{  
 const updateexpense=[expense, ...expenses]
setexpenses(updateexpense)  
}
// console.log(expenses)

return(
    <div>
        <NewExpense NE_FUNCTION={savenewexpensedatahandler}/>
        <Expenses item={expenses}/>
    </div>
)
   
}
export default App