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

export const getOrdersById = async (req: Request, res: Response) => {
  const user_ID = Number(req.params.user_ID);
  try {
    const orders = await dbClient.order.findMany({
      where: {
        user_ID,
      },
      orderBy: {
        id: "desc",
      },
    });
    res.json({ data: orders });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
