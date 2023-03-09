const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll();
    if (categoryData){
      return res.json(categoryData)
    }
    return res.status(404).json
  }catch (error){
    return res.status(500).json(error)
  }

});

router.get('/:id', async (req, res) => {
  try{
  const categoryData = await Category.findByPk(req.params.id);
  if (categoryData){
    return res.json(categoryData)
  }
  return res.status(404).json({message: "category not found"})
}catch (error){
  return res.status(500).json(error)
}

});

router.post('/',async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
    
router.put('/:id', async(req, res) => {
  try {
  const categoryData = await Category.update( req.body, {
      where:{
      id: req.params.id,
      },
  });
  if (!categoryData[0]){
    res.status(404).json({ message: 'No user with this id!' });
    return;
  }
  res.status(200).json(userData);
} catch (err) {
  res.status(500).json(err);
}
});


router.delete('/:id', async (req, res) => {
  try{
  const categoryData= await Category.destroy({
    where: {
      id: req.params.id
    },
  }) ;
  if (!categoryData) {
    res.status(404).json({ message: 'No category with this id!' });
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});
  
  

module.exports =router;
