
import dbConnect from "../../../../lib/mongoDb"
import Item from '../../../../model/items'
export async function DELETE(req,{params}){
    await dbConnect();
   try{ const {list_id}=await params
   const name = "allList";
   const item = await Item.findOne({ name });

   if (!item) {
     return Response.json({ error: "Item not found" }, { status: 404 });
   }
   item.lists = item.lists.filter((list) => list.list_id !== Number(list_id));
   console.log("bgfjnkmd,",item)
   await item.save();


   return Response.json({message:"Deleted the list succefully"},{status:200})}
   catch(err){
    console.log("fgjnm,",err);
    
    return Response.json({message:"something went wrong"},{status:500})
   }
}