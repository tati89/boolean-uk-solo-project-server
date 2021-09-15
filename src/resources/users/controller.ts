import { Request, Response } from "express";
import userClient from "./service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userClient.findMany();
    res.json({ data: users });
  } catch (error) {
    res.json({ error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const created = await userClient.createWithHash(newUser);
    res.json({ data: created });
  } catch (error) {
    res.json({ error });
  }
};
