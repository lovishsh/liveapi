require('dotenv').config();
const express=require('express');
const connectionDB=require('./connectionDB/connection');
const app = express();
const port=process.env.PORT || 4000;
const routes=require('./routes/data');
app.use('/api/v1/products',routes);
const start=  async ()=>{
    try {
        await connectionDB(process.env.MONGODB_URL)
        await app.listen(port,function(){
            console.log(`http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();