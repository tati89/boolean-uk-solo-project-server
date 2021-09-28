import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await dbClient.order.findMany({
      orderBy: {
        id: "desc",
      },
    });
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

export const updateOrder = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const info = req.body;
  console.log(info);

  try {
    const foundOrder = await dbClient.order.findUnique({
      where: { id },
    });

    if (foundOrder) {
      const updatedOrder = await dbClient.order.update({
        where: { id },
        data: {
          ...foundOrder,
          status: info.status,
        },
      });
      res.json({ data: updatedOrder });
    } else {
      res.json({ msg: `ID ${id} not found` });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
