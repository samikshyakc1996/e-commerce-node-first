const express=require('express');
const path=require('path');
const router=express.Router();

const adminController=require('../controllers/admin');


router.get('/add-product', adminController.getAddProducts);
router.post('/',adminController.postAddProducts);
router.get('/admin/products',adminController.getAdminProducts);
router.get('/admin/products/:productId/edit',adminController.getEditProduct);

module.exports=router;
