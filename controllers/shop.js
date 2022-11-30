// const products=[];
const Product=require('../model/product');
const Cart=require('../model/cart')
exports.getIndex=(req,res,next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/index',{
            pageTitle:'Index',
            path:'/',
            prods:products          
        });
   });
}
exports.getProducts=(req,res,next)=>{
  Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            pageTitle:'Products',
            path:'/products',
            prods:products          
        });
   });
};
exports.getProduct=(req,res,next)=>{
    const prodId=req.params.productId;
     Product.findById(prodId, product=>{
         res.render('shop/product-detail',{
              pageTitle: product.title,
              path:'/products',
              product:product
                       
          });
     });   
  };
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        pageTitle:"Cart",
        path:"/cart"
    })
}
exports.postCart=(req,res,next)=>{
    const prodId=req.body.productId;
    console.log(prodId);
    Product.findById(prodId,product=>{
        Cart.addProduct(prodId, product.price)
    })
    res.redirect('/cart');
};
exports.getCheckout=(req,res,next)=>{
res.render('shop/checkout',{
    pageTitle:"Checkout",
    path:'/checkout'
})
}