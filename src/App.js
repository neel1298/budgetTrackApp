import React, {useState,useEffect, Component} from 'react';
import './App.css';
import Alert from './components/Alert';

import ExpenseList from './components/ExpenseList';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const intialExpense = [
  {id:uuidv4(),charge:"rent",amount:1400}
]
//console.log(intialExpense);
function App() {
  const [expenses,setExpenses] = useState([]);
  const [charge,setCharage] = useState("");
  const [amount,setamount] = useState("");
  const [userid,SetUserId] = useState("");

  const getBudgetApi = () =>{
    axios.get('http://localhost:5000/budget')
      .then(res => {
        const budget = res.data;
        setExpenses(budget);
      })
  }

  useEffect(() => {
    getBudgetApi();
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(amount==="" || charge===""){
      alert("Please Enter a Value");
    }
    else{
    if (userid === ""){  
    const singleExpense = {id:uuidv4(),charge,amount}
    axios.post('http://localhost:5000/budget/add', singleExpense)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    setExpenses([...expenses,singleExpense]);
    }
    else{
      let tempExpenses = expenses.map(item => {
        return item.id === userid ? { ...item, charge, amount } : item;
      });
      setExpenses(tempExpenses);
      SetUserId("");
    }
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
  const handleedit = (id) =>{
    let item = expenses.find(item => item.id === id);
    console.log(item);
    let {charge,amount} = item;
    setCharage(charge);
    setamount(amount);
    SetUserId(id);
    
  }
  return (
  <>
  <Alert></Alert>
  <main className="App">
  <Form 
  id={userid}
  handleSubmit={handleSubmit}
  charge={charge}
  amount={amount}
  handleCharge = {handleCharge}
  handleAmount =  {handleAmount}
  />
  
  <ExpenseList expenses={expenses} handleClearItems={handleClearItems}
  handledelete = {handledelete}
  handleedit = {handleedit}
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
