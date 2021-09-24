import { User } from ".prisma/client";
import { createToken, validateToken } from "../../utils/authGenrator";
import { findUserWithValidation, findUnique, userClient } from "./service";
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const userCredentials: User = req.body;

  try {
    //1 check if credentials are valid
    //2 create token
    const loggedUser = await findUserWithValidation(userCredentials);
    const token = createToken({
      id: loggedUser.id,
    });

    res.cookie("token", token, { httpOnly: true });

    res.json({
      data: {
        id: loggedUser.id,
        username: loggedUser.username,
        fisrtName: loggedUser.firstName,
        lastName: loggedUser.lastName,
        phone: loggedUser.phone,
        email: loggedUser.email,
        avatar: loggedUser.avatar,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error });
  }
};

export async function logout(req: Request, res: Response) {
  res.clearCookie("token");
  res.json({ msg: "Succesfully logged out", data: null });
}

export const signUp = async (req: Request, res: Response) => {
  const newUser: User = req.body;

  try {
    //1 create user with hash password
    //2 create token
    const createdUser = await userClient.createWithHash(newUser);

    const token = createToken({
      id: createdUser.id,
    });

    res.cookie("token", token, { httpOnly: true });

    res.json({
      data: {
        id: createdUser.id,
        username: createdUser.username,
      },
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export async function validateLoggedInToken(req: Request, res: Response) {
  const token = req.cookies.token;

  const tokenPayload =
    token && (validateToken(token) as { id: string; role: string });

  if (tokenPayload) {
    const userData = await findUnique({
      where: {
        id: parseInt(tokenPayload.id),
      },
      select: {
        username: true,
      },
    });

    res.json({ data: userData });
  } else {
    res.status(401).json({ err: "No valid token was found" });
  }
}
