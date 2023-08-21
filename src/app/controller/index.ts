import { addOrder, deleteOrder, getOrders, updateOrder } from "../../core/services";
import { Request, Response, NextFunction } from "express";

export async function addNewOrder(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addOrder(req.body);
  res.json(data);
}

export async function getAllOrders(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await getOrders(req.body.user_id);
  res.json(data);
}

export async function deleteOrderById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {

  const data = await deleteOrder(req.params.id, req.body.user_id);
  res.json(data);
}

export async function updateOrderRecord(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await updateOrder(req.params.id, req.body);
  res.json(data);
}

