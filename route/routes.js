const express=require('express');
const router=express.Router();
const Item=require('../model/shoppingItem');
//Retrieve data
router.get('/shopping',function(req,res,next){
    //res.send('Response from get');
    Item.find(function(err,items){
        if(err){
            res.json({success:false,msg:err});
        }
        else{
            res.json({success:true,items:items});
        }
    })
})

//Insert data
router.post('/shopping',function(req,res,next){
    //res.send('Response from post');
    Item.create(function(err,item){
        if(err){
            res.json({success:false,msg:err});
        }
        else{
            var newShoppingItem=new Item({
                itemName:req.body.itemName,
                itemQuantity:req.body.itemQuantity,
                itemBought:req.body.itemQuantity
            });
            newShoppingItem.save(function(err,item){
                if(err){
                    res.json({success:false,msg:err});
                }
                else{
                    res.json({success:true,msg:'Item has been added successfully',item:item});
                }
            })
        }
    })

})

//Update date

router.put('/shopping/:id',function(req,res,next){
   // res.send('Response from put');
    Item.findOneAndUpdate({_id:req.params.id},
        {$set:{itemName:req.body.itemName,itemQuantity:req.body.itemQuantity,itemBought:req.body.itemBought}},function(err,result){
            if(err){
                res.json({success:false,msg:err});
            }
            else{
                res.json({success:true,msg:result});
            }
        })
})

//Delete data
router.delete('/shopping/:id',function(req,res,next){
    //res.send('Response from delete');
    Item.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json({success:false,msg:err});
        }
        else{
            res.json({success:true,msg:result});
        }
    })
})













//Export router inorder to import it in other files
module.exports=router;