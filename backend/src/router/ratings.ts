import RatingItem from "../models/ratingItem.ts";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const ratings = await RatingItem.find();
    res.status(200).json(ratings);

  } catch (error) {
    
    console.error("Error fetching ratings:", error);
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const ratingsItem = req.body;

    await RatingItem.create(ratingsItem);
    res.status(201).json({ message: "Rating created", ratingsItem });
  } catch (error) {
    console.error("Error creating rating:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {});

export default router;
