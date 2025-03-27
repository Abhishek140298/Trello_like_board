import dbConnect from "../../../lib/mongoDb";
import Item from '../../../model/items'

export async function POST(req){
await dbConnect()
const body=await req.json()

const item=await Item.findOne({name:"allList"})
console.log("FHkshf",body,item)

item.lists=item.lists.map(list=>{ if (list.list_id === body.list_id) {
    return {
      ...list, // Keep other properties unchanged
      list_task: [...list.list_task, body.task], // Add new task
    };
  }
  return list; // Return unchanged list })}
})
 await   item.save()
return Response.json({message:'success ',data:item},{status:200})
}