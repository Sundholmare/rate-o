import express from "express";
const router = express.Router();


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // Logic to get a rating by ID
  console.log(id)

  res.status(200).json({ message: `Get rating with ID: ${id}` });
});

router.post('/', async (req, res) => {
 
})


router.delete('/:id', async (req, res) => {

})


export default router;