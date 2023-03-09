const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  try{
    const tagData = await tag.findAll({
      include: [{model:Product}]
    });
    if (productData){
      return res.json(productData)
    }
    return res.status(404).json
  }catch (error){
    return res.status(500).json(error)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async  (req, res) => {
  try{
    const tagData = await tag.findByPk(req.params.id,{
      include: [{model: Product}]})
    if (tagData){
      return res.json(tagData)
    }
    return res.status(404).json({message: "product not found"})
  }catch (error){
    return res.status(500).json(error)
  }
 
});

router.post('/', async(req, res) => {
  try {
    const tagData = await tag.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await tag.update( req.body, {
        where:{
        id: req.params.id,
        },
    });
    if (!tagData[0]){
      res.status(404).json({ message: 'No tag associated with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  });


router.delete('/:id', async (req, res) => {
  try{
  const tagData= await tag.destroy({
    where: {
      id: req.params.id
    },
  }) ;
  if (!tagData) {
    res.status(404).json({ message: 'No tag with this id!' });
    return;
  }
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});
  

module.exports = router;
