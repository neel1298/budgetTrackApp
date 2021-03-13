import React from 'react'

const Form = ({
    id,
    charge,
    amount,
    handleCharge,
    handleAmount,
    handleSubmit,
    edit
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <input type="hidden" value={id} name='userid'></input>
            <label htmlFor="expense">charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="e.g. rent"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          {edit ? "edit" : "submit"}
          
        </button>
      </form>
    );
}

export default Form
