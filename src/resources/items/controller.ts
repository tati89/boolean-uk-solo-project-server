import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const getAllMenu = async (req: Request, res: Response) => {
  try {
    const menu = await dbClient.item.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.json({ data: menu });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
