import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const getBasket = async (req: Request, res: Response) => {
  const user_ID = Number(req.params.user_ID);

  try {
    const foundBasket = await dbClient.basket.findFirst({
      where: { user_ID },
      include: { items: true },
    });

    res.json({ data: foundBasket });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const getUserBasket = async (req: Request, res: Response) => {
  const user_ID = Number(req.params.user_ID);
  const basketToCreate = req.body;

  try {
    const foundBasket = await dbClient.basket.findFirst({
      where: { user_ID },
      include: { items: true },
    });

    if (!foundBasket) {
      const newBasket = await dbClient.basket.create({
        data: { ...basketToCreate },
      });

      res.json({ data: newBasket });
    } else {
      res.json({ data: foundBasket });
    }
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
