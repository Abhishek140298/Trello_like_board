import mongoose from "mongoose"
import { cache } from "react"


const uri=process.env.MONGODB_URI

if(!uri){
  throw new Error("URI is not present")
}



let cached=global.mongoose

if(!cached){
   cached=global.mongoose={ conn: null, promise: null }
}

async function dbConnect(){


    console.log("URI",uri);
    
  try{  if(cached.conn){
    return cached.conn
}
if(!cached.promise){
    cached.promise=mongoose.connect(uri).then((mongoose)=>{
        return mongoose}).catch(er=>console.log("Error while connecting DB"))
}

cache.conn=await cached.promise
return cached.conn}
catch(err){}
}

export default dbConnect