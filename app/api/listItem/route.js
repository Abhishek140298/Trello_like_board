import dbConnect from "../../../lib/mongoDb";
import Item from '../../../model/items'


// // export default async function handler(req,res){
// //  const dbCon=   await dbConnect()

// //  const {method}=req

// // switch(method){
// //     case 'GET': try {
// //         const items = await Item.find({});
// //         res.status(200).json({ success: true, data: items });
// //       } catch (error) {
// //         res.status(400).json({ success: false });
// //       }
// //       break;

// //       case 'POST':
// //         try {
        
// //             console.log("GDJHDghjgafhg",dbCon)

// //             // Creating a new Item document
// //             const newItem = new Item({
// //               lists: [
// //                 {
// //                   list_id: 1,
// //                   list_title: "My First List",
// //                   list_task: ["Task 1", "Task 2", "Task 3"],
// //                 },
// //               ],
// //             });
      
// //             await newItem.save(); // Save to MongoDB
// //             res.status(201).json({ message: "Item created successfully", data: newItem });
// //           } catch (error) {
// //             console.error("Error creating item:", error);
// //             res.status(500).json({ error: "Error creating item" });
// //           }
      
// //           break;
// //         default:
// //           res.status(400).json({ success: false });
// //           break;
      
// // }
 
// // }



// export  async function POST(req,res){
//   const dbCon=   await dbConnect()

//   try {
        
//     console.log("GDJHDghjgafhg",dbCon)

//     // Creating a new Item document
//     const newItem = new Item({
//       lists: [
//         {
//           list_id: 1,
//           list_title: "My First List",
//           list_task: ["Task 1", "Task 2", "Task 3"],
//         },
//       ],
//     });

//    await newItem.save(); // Save to MongoDB
//     res.status(201).json({ message: "Item created successfully", data: newItem });
//   } catch (error) {
//     console.error("Error creating item:", error);
//     res.status(500).json({ error: "Error creating item" });
//   }

// }


export async function POST(req) {
  await dbConnect();

  try {
   


    const list=await Item.findOne({name:"allList"})
    const body = await req.json();
    console.log("listerrrr",body)
    if(list===null){
      console.log("fhdhdj",list)
      let newList=new Item({
        name:"allList",
        lists:[body]
      })
   await newList.save()
    }
    else{
      list.lists.push(body)
      await list.save()
    }
   


   return Response.json({ message: "Item created successfully", data: await Item.find() }, { status: 200 });
  } catch (error) {
    console.log("Error creating item:", error);
    return Response.json({ error: "Error creating item" }, { status: 500 });
  }
}



export async function GET(req){
  await dbConnect()

  try{
     const getALlList=await Item.findOne({name:"allList"})

     return Response.json({message:"All list fetched succesfuly",data:getALlList},{status:200})

  }
  catch(err){
console.log("Something Wrong happened",err)
  }
}



export async function DELETE(req){
  await dbConnect()

  try{
     const delList=await Item.deleteOne(({name:"allList"}))

    return Response.json({message:"All list fetched succesfuly",data:getALlList},{status:200})
  }
  catch(err){

  }
}