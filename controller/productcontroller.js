const Product=require('../Model/productmodel');

// Function to create a new product
module.exports.create=async function (req,res)
{
  try{
  const product= await Product.create(req.body);
  res.status(201).json({
    sucess:true,
    data:{
        product:product
    },
    message:"Product created"
  })
}catch(err)
{
  console.log("Error is coming",err);
}



}
// Function to show all the products
module.exports.productList=async function(req,res){
  try{

  const product=await Product.find({});
  if(product)
  {
    res.status(201).json({
      data:{
        product:product
      }
    })
  }
  else{
    res.status(500).json({
      message:"product list not found",
    })
  }

  }catch(err)
  {
    console.log("Error is coming",err);
  }
}
// Function to delete a product using its ID
module.exports.delete=async function(req,res)
{
  try{
      const product=await Product.findById(req.params.id);
      console.log(product);
      if(product)
      {
        product.deleteOne();
        res.status(201).json({
          message:"Product Deleted"

        })
      }
      else
      {
        res.status(501).json({
          message:"Porduct not found"
        })
      }
    }catch(err)
    {
      console.log("Error is coming",err);
    }

}
// Function to update a product's quantity
module.exports.update=async function(req,res)
{
  try{
  const product=await Product.findById(req.params.id);
  if(!product)
  {
    res.status(500).json({
      message:"Porduct not updated"
    })
  }

  const newqty=parseInt(product.quantity)+parseInt(req.query.number);
  product.quantity=newqty;
  await product.save();
    res.status(201).json({
      data:{
        product:product,

      },
      message:"Product updated succesfully"
    })
  }catch(err)
  {
    console.log("Error is coming",err);
  }
}

