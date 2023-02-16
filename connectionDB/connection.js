require('dotenv').config();
const mongoose= require('mongoose');


const start=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
    })
}

module.exports=start;
 