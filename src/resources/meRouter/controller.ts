import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const getUserByCookie = async (req: Request, res: Response) => {
  try {
    const foundInfo = await dbClient.user.findUnique({
      where: {
        id: req.currentUser.id,
      },
      include: {
        orders: true,
      },
    });
    res.json({ data: foundInfo });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
