import dbClient from "../../utils/dbClient";
import { User } from ".prisma/client";

import { compare } from "bcrypt";

export const findUserWithValidation = async (data: User) => {
  const foundUser = await dbClient.user.findUnique({
    where: { username: data.username },
  });

  if (!foundUser) throw new Error("Username/Password incorrect");

  const isPasswordValid = await compare(data.password, foundUser.password);

  if (!isPasswordValid) throw new Error("Username/Password incorrect");

  return foundUser;
};

export const findUnique = dbClient.user.findUnique;
