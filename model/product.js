
const { json, get } = require('express/lib/response');
const { v4: uuidv4} = require('uuid');
const fs=require('fs');
const path=require('path');
const p =path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFromFile = cb =>{    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
        // if you dont wanna write else block, simply write 'return' in if statement so that it never executes another line after.
        
    });   
};

module.exports= class Product{
    constructor(titl, Image, desc, price){
        this.title=titl;
        this.Image=Image,
        this.description=desc;
        this.price=price;
    }
    save(){
        this.id=uuidv4();
       getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(p , JSON.stringify(products),(err)=>{
                            console.log("err while writing in the file:",err);
                        });
       });      
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    };

    static findById(id,cb){
        getProductsFromFile((products)=>{
           const product= products.find(p=>p.id===id);
          cb(product); 
    })
        
    }
};