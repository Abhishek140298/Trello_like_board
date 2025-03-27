import mongoose from "mongoose";

const ItemSchema=mongoose.Schema({
    lists:[
        {
            list_id:Number,
            list_title:String,
            list_task:Array
        }
    ]
})

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
