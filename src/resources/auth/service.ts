import dbClient from "../../utils/dbClient";
import { User } from ".prisma/client";
import { compare, hash } from "bcrypt";

export type NewUser = {
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  agreedToNews?: boolean | null;
  avatar: string;
  phone: string;
  email: string;
};

export const findUserWithValidation = async (data: User) => {
  const foundUser = await dbClient.user.findUnique({
    where: { username: data.username },
  });

  if (!foundUser) throw new Error("Username/Password incorrect");

  const isPasswordValid = await compare(data.password, foundUser.password);

  if (!isPasswordValid) throw new Error("Username/Password incorrect");

  return foundUser;
};

const createWithHash = async (newUser: NewUser) => {
  const textPassword = newUser.password;

  const hashedPassword = await hash(textPassword, 10);

  const savedUser = await dbClient.user.create({
    data: { ...newUser, password: hashedPassword },
  });
  return savedUser;
};

export const userClient = {
  ...dbClient.user,
  createWithHash,
};

export const findUnique = dbClient.user.findUnique;
