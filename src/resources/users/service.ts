import dbClient from "../../utils/dbClient";
import { hash, compare } from "bcrypt";

export type NewUser = {
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  agreedToNews: boolean;
  avatar: string;
  phone?: string;
  email?: string;
};

const createWithHash = async (newUser: NewUser) => {
  const textPassword = newUser.password;

  const hashedPassword = await hash(textPassword, 10);

  const savedUser = await dbClient.user.create({
    data: { ...newUser, password: hashedPassword },
  });
};

const userClient = {
  ...dbClient.user,
  createWithHash,
};

export default userClient;
