require('dotenv').config();
const connection=require('./connectionDB/connection');
const models=require('./models/dataSchema');
const data=require('./data.json');
const start=async ()=>{
    try {
        await connection(process.env.MONGODB_URL);
        await models.create(data);
        
    } catch (error) {
        console.log(error);
    }
}

start();