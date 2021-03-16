const mongoose = require('mongoose');

const schema = mongoose.Schema;

const budgetSchema = new schema({
    charge:{type:String,required:true},
    amount:{type:Number,required:true}
},{

    timestamps:true,
});


const budget = mongoose.model('budget',budgetSchema);

module.exports = budget;