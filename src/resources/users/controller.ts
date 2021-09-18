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

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const user = await dbClient.user.findUnique({
      where: {
        id,
      },
    });
    res.json({ data: user });
  } catch (error) {
    res.json({ error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const deletedUser = await dbClient.user.delete({
      where: {
        id,
      },
    });

    res.json({ data: "success" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
