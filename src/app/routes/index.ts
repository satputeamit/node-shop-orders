import { Router } from "express";

import { addNewOrder, deleteOrderById, getAllOrders, updateOrderRecord } from "../controller";

const router = Router();

router.post("/addorder", addNewOrder);
router.get("/orders", getAllOrders);
router.delete("/deleteorder/:id", deleteOrderById);
router.patch("/updateorder/:id", updateOrderRecord);


export default router;
