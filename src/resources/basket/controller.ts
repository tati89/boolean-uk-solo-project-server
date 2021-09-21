import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const getUserBasket = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const foundBasket = await dbClient.basket.findUnique({
      where: { id },
      include: { items: true },
    });
    res.json({ data: foundBasket });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const addBasket = async (req: Request, res: Response) => {
  const newBasket = req.body;
  try {
    const added = await dbClient.basket.create({
      data: { ...newBasket },
    });
    res.json({ data: added });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const deleteBasket = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const removed = await dbClient.basket.delete({
      where: { id },
    });
    res.json({ msg: "removed" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
