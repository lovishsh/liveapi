import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app.js";
const server=http.createServer(app);
const port=process.env.PORT || 4001;
server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})
