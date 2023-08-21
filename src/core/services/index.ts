import { AddOrder,UpdateOrder } from "../../interfaces";
import { OrdersModel } from "../../database/schemas/products"


export async function addOrder(orderObj: AddOrder): Promise<any> {

    let msg = new OrdersModel({
        items: orderObj.items,       
        total_amount: orderObj.total_amount,       
        user_id:orderObj.user_id
    });

    let data = await msg.save()
    return {
        message: "Order generated successfully...",
        data: data,
    };

}

export async function getOrders(user_id: string): Promise<any> {
    var orders = await OrdersModel.find({user_id:user_id})
    return {
        message: "Successful",
        data: orders,
    }

}

export async function deleteOrder(id: string, userId: string): Promise<any> {

    const data = await OrdersModel.deleteOne({ _id: id , user_id:userId})
    return {
        message: "Order deleted",
        data: data,
    }

}

export async function updateOrder(id: string, orderObj: UpdateOrder) {
    var query = { '_id': id ,'user_id':orderObj.user_id};
    delete orderObj["user_id"]

    const data = await OrdersModel.updateOne(query, orderObj)
    return {
        message: "Order updated",
        data: data,
    }
}
// Update, delete
