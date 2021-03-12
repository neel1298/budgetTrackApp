import React from 'react'
import {FaTrash,FaRegEdit}  from "react-icons/fa";

const ExpenseItem = ({expense,handledelete}) => {
   const {id,charge,amount} = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
                <button className='edit-btn' aria-label='edit-button'><FaRegEdit/></button>
                <button className='delete-btn' aria-label='delete-button' onClick={()=>handledelete(id)}><FaTrash/></button>
            </div>        
        </li>
        
    
    )
}

export default ExpenseItem
