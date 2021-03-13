import React from 'react'
import Item from './ExpenseItem'
import {FaTrash}  from "react-icons/fa";

const ExpenseList = ({expenses,handleClearItems,handledelete,handleedit}) => {
    
    return <>
    <ul className="list">
    {expenses.map((expense)=>{
        return <Item key={expense.id}  expense={expense}  handledelete={handledelete} handleedit={handleedit} />

    })}
    
    </ul>
    {expenses.length >0 && <button className='btn' onClick={handleClearItems}>CLear Expenses  <FaTrash/></button>}
    </>
}

export default ExpenseList;
