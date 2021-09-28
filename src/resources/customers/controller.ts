import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await dbClient.user.findMany();
    res.json({ data: users });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
