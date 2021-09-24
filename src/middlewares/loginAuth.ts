import { NextFunction, Request, Response } from "express";
import { validateToken } from "../utils/authGenrator";

export default (req: Request | any, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  let payload = null;

  if (token) {
    payload = validateToken(token);
  }

  if (payload) {
    //create new property and store payload in it
    req.currentUser = payload;
    // req.currentUserId = (payload as any).id;
    //continue normal go through routes
    next();
  } else {
    res.status(401).json({ err: "You must be logged in to access this data" });
  }
};
