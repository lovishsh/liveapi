const Products=require('../models/dataSchema');
const getAllData=async (req,res)=>{
   const {company,featured,name,sort,select}=req.query;
   const queryObject={};
   if(company){
       queryObject.company=company;
   }
   if(name){
     queryObject.name={$regex:name, $options:'i'};
   }
   let apidata=Products.find(queryObject);
   let page=Number(req.query.page) || 2;
   let limit=Number(req.query.limit) || 6;
   let skip=((page - 1)*limit);
   apidata=apidata.skip(skip).limit(limit);

   if(sort){
     let sortFixed=sort.split(',').join(' ');
     apidata=apidata.sort(sortFixed);
   }
   if(select){
     let selectFixed=select.split(',').join(' ');
     apidata=apidata.select(selectFixed);
   }
   const Product=await apidata;
     res.status(200).json({
     Product
     
    
  })
}
const getAllTestingData=async (req,res)=>{
  const data= await Products.find({});
  res.status(200).json({data});
}

module.exports ={getAllData,getAllTestingData};