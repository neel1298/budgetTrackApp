const router = require('express').Router();
let budgetModel = require("../models/budget.model");

router.route('/').get((req,res)=>{
    budgetModel.find().then(budget=>res.json(budget)).catch(err=>res.status(400).json('Error'+err));

});

router.route('/add').post((req, res) => {
    const charge = req.body.charge;
    const amount = req.body.amount;
  
    const newBudgetEntry = new budgetModel({
      charge,
      amount
    });
    newBudgetEntry.save()
    .then(()=>res.json("Budget Added"))
    .catch(err=>res.status(400).json("Error"+err));

});   


module.exports = router;