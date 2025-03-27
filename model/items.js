import mongoose from "mongoose";

const ItemSchema=mongoose.Schema({
    name:String,
    lists:[
        {
            list_id:Number,
            name:String,
            list_task:Array
        }
    ]
})

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
