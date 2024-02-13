const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comme');
   const productSche=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String

   });
   const datasave= async ()=>{
   const productModel=mongoose.model('products',productSche);
   let data=new productModel({'name':'samsung','price':100,'brand':'phone','category':'electronics'});
   let result=await data.save();
   console.log(result);
}
 const updatedata= async()=>{
    const Product=mongoose.model('products',productSche);
    let data= await Product.updateOne({'name':'waqar'},{$set:{'name':'iphone'}});

 }
updatedata();

const deletedata=async()=>{
    const Product=mongoose.model('products',productSche);
    let data=await Product.deleteOne({'name':'iphone'});
}
deletedata();
const insertdata = async () => {
    const Product = mongoose.model('products', productSche);
    try {
        let data = new Product({ 'name': 'waqar', 'price': 24, 'brand': '5ht', 'category': 'phone' });
        await data.save();
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

insertdata();