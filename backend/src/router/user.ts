import User from "../models/user.ts";
import express from "express";
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello from user router');
});

router.post('/', async (req, res) => {
  try {
    const user = new User ({
      name: req.body.name,
      email: req.body.email,
    });

    await user.save();
    res.status(201).json(user);

  } catch (error) {
    console.error('Error creating user:', error);
  }
})


router.delete('/:id', async (req, res) => {

})


export default router;