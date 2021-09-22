import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const createOrder = async (req: Request, res: Response) => {
  const user_ID = Number(req.params.user_ID);
  const newOrder = req.body;

  try {
    const basketExist = await dbClient.basket.findFirst({
      where: { user_ID },
    });

    if (basketExist) {
      const created = await dbClient.order.create({
        data: { ...newOrder },
      });
      res.status(201).json({ data: created });
    } else {
      res.status(500).json({ msg: `Can't find basket with ID ${user_ID}` });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await dbClient.order.findMany();
    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const removed = await dbClient.order.delete({
      where: { id },
    });
    res.json({ data: "deleted" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
