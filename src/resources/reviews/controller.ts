import { Request, Response } from "express-serve-static-core";
import dbClient from "../../utils/dbClient";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await dbClient.review.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
    });
    res.json({ data: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const addReview = async (req: Request, res: Response) => {
  const newReview = req.body;
  try {
    const reviewAdded = await dbClient.review.create({
      data: {
        ...newReview,
      },
    });
    res.json({ data: reviewAdded });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
