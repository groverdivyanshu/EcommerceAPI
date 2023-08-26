const express=require('express');
const router=express.Router();
const productcontoller=require('../controller/productcontroller');


router.get('/',productcontoller.productList);
router.post('/create',productcontoller.create);
router.get('/:id',productcontoller.delete)
router.post('/:id/update_quantity',productcontoller.update)

module.exports=router;  