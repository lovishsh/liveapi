const mongoose = require('mongoose');
const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be specified'],
    },
    price:{
        type:Number,
        required:[true,'price must be specified'],

    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.4,
    },
    company:{
        type:String,
        enum:{
            values:['dell','realme','apple','samsung'],
        },
        msg:`{VALUE} is not valid`,
    }
});
module.exports=mongoose.model('Product',ProductSchema);