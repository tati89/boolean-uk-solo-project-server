import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import dbClient from "../utils/dbClient";

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  const foundAdmin: any = await dbClient.user.findUnique({
    where: {
      id: Number(req.currentUser.id),
    },
  });

  if (foundAdmin.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "You're not an admin!" });
  }
};

export default adminAuth;
