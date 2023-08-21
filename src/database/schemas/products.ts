import mongoose from "mongoose";

// payment status
// 0 : pending
// 1 : done

let orderSchema = new mongoose.Schema({
  items: [String],
  total_amount: Number,   
  status: {type:Number, default:0}, 
  user_id:String
}, {timestamps: true});

export let OrdersModel = mongoose.model('Orders', orderSchema);

