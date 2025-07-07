import mongoose from "mongoose";
import { cache } from "react";

let cached = global.mongoose 

if (!cached){
    cached = global.mongoose ={ conn: null, Promise : null}


}

async function connectDB() {
    if( cached.conn){
        retunr cached.conn
    }
    
    if(!cached.Promise){
        const opts={
            bufferComands:false
        }

        cached.promise= mongoose.connect('${process.env.MONGODB_URL}/quickcart',opts).then(mongoose=>{
            return mongoose
        })

        
    }
    cached.conn =await cached.promise
    return cached.conn
    
}
export default connectDB