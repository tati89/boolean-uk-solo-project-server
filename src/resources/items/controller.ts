import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const getAllMenu = async (req: Request, res: Response) => {
  try {
    const menu = await dbClient.item.findMany();
    res.json({ data: menu });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

export const addItem = async (req: Request, res: Response) => {
  const newItem = req.body;
  try {
    const added = await dbClient.item.create({
      data: { ...newItem },
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
