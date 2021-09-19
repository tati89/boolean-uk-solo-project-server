import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await dbClient.category.findMany();
    res.json({ data: categories });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
