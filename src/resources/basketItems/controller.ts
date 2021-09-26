import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const getItems = async (req: Request, res: Response) => {
  try {
    const allInBasket = await dbClient.basketItem.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.json({ data: allInBasket });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const addItemOrIncreaseQty = async (req: Request, res: Response) => {
  const { qty, basket_ID, item_ID } = req.body;

  try {
    const alreadyInBasket = await dbClient.basketItem.findFirst({
      where: {
        item_ID: Number(item_ID),
      },
    });

    const basketExist = await dbClient.basket.findUnique({
      where: {
        id: Number(basket_ID),
      },
    });

    if (!basketExist) {
      res.json({ msg: `Basket with ID ${basket_ID} doesn't exict` });
    } else if (alreadyInBasket) {
      const updatedQty = await dbClient.basketItem.update({
        where: {
          id: alreadyInBasket.id,
        },
        data: {
          ...alreadyInBasket,
          qty: alreadyInBasket.qty + Number(qty),
        },
      });
      res.json({ data: updatedQty });
    } else {
      const newBasketItem = await dbClient.basketItem.create({
        data: {
          qty,
          basket_ID,
          item_ID,
        },
      });
      res.json({ data: newBasketItem });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const updateItemQty = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  //   const { qty } = req.body;

  try {
    const foundItem = await dbClient.basketItem.findUnique({
      where: { id },
    });

    if (foundItem) {
      const updatedItem = await dbClient.basketItem.update({
        where: {
          id,
        },
        data: {
          ...foundItem,
          qty: foundItem?.qty - 1,
        },
      });
      res.json({ data: updatedItem });
    } else {
      res.json({ msg: `No ${id} found` });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const deleted = await dbClient.basketItem.delete({
      where: { id },
    });
    res.json({ msg: "Successfully removed from db" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
