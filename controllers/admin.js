const Product=require('../model/product');

exports.getAddProducts=(req,res,next)=>{
    res.render('admin/add-product',{
        pageTitle:'Add product',
        path:'/admin/add-product',
        // prods:products
    })
};
exports.postAddProducts=(req,res,next)=>{
    const product= new Product(req.body.title, req.body.Image, req.body.description,req.body.price);
    
    product.save();
    // products.push({title:req.body.title,
    //             imageSrc:req.body.image,
    //         description:req.body.description  });
    res.redirect('/');
};
exports.getAdminProducts=(req,res,next)=>{

    Product.fetchAll((products)=>{
        res.render('admin/products',{
            pageTitle:'Admin Products',
            path:'/admin/products',
            prods:products          
        });
   });    
}

exports.getEditProduct=(req,res,next)=>{
    const prodId=req.params.productId;
    Product.findById(prodId,product=>{
        res.render('admin/edit-product',{
                pageTitle:'edit',
                path:'/admin/products',
                product:product
            })
    });
   
}

