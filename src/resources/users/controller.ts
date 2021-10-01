import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";

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

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const newInfo = req.body;
  console.log(newInfo);

  try {
    const userExist = await dbClient.user.findUnique({
      where: { id },
    });

    if (userExist) {
      const updated = await dbClient.user.update({
        where: { id },
        data: { ...newInfo },
      });

      res.status(201).json({ data: updated });
    } else {
      res.status(500).json({ msg: `Can't find user with ID ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
