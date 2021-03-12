import React, {useState,useEffect} from 'react';
import './App.css';
import Alert from './components/Alert';

import ExpenseList from './components/ExpenseList';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';



const intialExpense = [
  {id:uuidv4(),charge:"rent",amount:1400}
]
//console.log(intialExpense);
function App() {
  const [expenses,setExpenses] = useState([]);
  const [charge,setCharage] = useState("");
  const [amount,setamount] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(amount==="" || charge===""){
      alert("Please Enter a Value");
    }
    else{
    const singleExpense = {id:uuidv4(),charge,amount}
    setExpenses([...expenses,singleExpense]);
    setCharage("");
    setamount("");
    } 
  }
  const handleCharge = (e) =>{
    setCharage(e.target.value);
  }
  const handleAmount = (e) =>{
    setamount(parseInt(e.target.value));
  }
  const handleClearItems = () =>{
    setExpenses([]);

  }
  const handledelete = (id) =>{
    let removeitem = expenses.filter(item => item.id !== id)
    setExpenses(removeitem);
  }
  return (
  <>
  <Alert></Alert>
  <main className="App">
  <Form 
  handleSubmit={handleSubmit}
  charge={charge}
  amount={amount}
  handleCharge = {handleCharge}
  handleAmount =  {handleAmount}
  />
  
  <ExpenseList expenses={expenses} handleClearItems={handleClearItems}
  handledelete = {handledelete}
  
  />
  </main>
  <h1>
  total Spending:<span/>
    ${expenses.reduce((acc,curr)=>{
      return (acc +curr.amount);

    },0)}
  </h1>
  
  </>)
}

export default App;
