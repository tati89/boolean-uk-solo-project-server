import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const addItem = async (req: Request, res: Response) => {
  const newItem = req.body;

  try {
    const added = await dbClient.item.create({
      data: {
        ...newItem,
        price: Number(newItem.price),
        category_ID: Number(newItem.category_ID),
      },
    });
    res.json({ data: added });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const removed = await dbClient.item.delete({
      where: { id },
    });
    res.json({ data: "Successfully removed from the system" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const info = req.body;
  console.log(info);

  try {
    const ifExist = await dbClient.item.findUnique({
      where: { id },
    });
    if (ifExist) {
      const updated = await dbClient.item.update({
        where: { id },
        data: { ...info },
      });
      res.json({ data: updated });
    } else {
      res.json({ msg: `ID ${id} not found` });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
