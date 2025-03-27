"use client";

import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { AppContext } from "../app/page";

export default function List({ isAddNewList, setOpenAddList = null, list ,handleAddList}) {
  const [openInputAddCard, setOpenInputAddCard] = useState(false);
  const { newList, setNewList,setNewListAdded } = useContext(AppContext);
  const [task,setTask]=useState('')
  
  const handleAddCard = () => {
    if(openInputAddCard){
        
    addTaskApi({list_id:list.list_id,task:task})

   
    
    }
    setOpenInputAddCard(true);
  };

  const handleClose = () => {
    setOpenInputAddCard((prev) => false);
  };

  const handleCloseList = () => {
    setOpenAddList(false);
  };


const handleAddNewList=(event)=>{
    let listName=event.target.value
     let cr={
         list_id:Math.random()*10,
         list_task:[],
         name:listName

     }
     setNewList(cr)
}

async function deleteList(id){
    const response =await fetch(`/api/listItem/${id}`,{method:'DELETE'})
    setNewListAdded(prev=>!prev)

}



const handleDeleteList=()=>{
const res=deleteList(list.list_id)


}

async function addTaskApi(task){

const response=await fetch(`/api/taskItem`,{method:'POST', headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),})
    setOpenInputAddCard(prev=>false)
    setNewListAdded(prev=>!prev)

}

function handleChangeAddCard(event){
const task=event.target.value
setTask(prev=>task)
}

  return (
    <>
      {isAddNewList ? (
        <div className="bg-listCard rounded-[10px] min-w-[250px] min-h-[95px] p-5 text-white flex gap-[10px] flex-col">
          <textarea
            className="w-[250px] min-h-[60px] border border-inputBorder hover:border-transparent  focus:outline-none rounded-md bg-input p-1 "
            type="text"
            onChange={handleAddNewList}
          />
          <div className="flex pt-2 gap-1  items-center">
            <button
              className="flex  bg-transparent justify-center items-center  hover:bg-gray-500 p-1 rounded"
              onClick={handleAddList}
            >
              Add List
            </button>
            <span
              className="ml-[3px] cursor-pointer text-white hover:bg-gray-500 rounded"
              onClick={handleCloseList}
            >
              {" "}
              <MdClose size={20} />
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-listCard rounded-[10px] min-w-[280px] min-h-[95px] p-5 text-white flex gap-[10px] flex-col" >
          <h3 className="font-bold ">{list.name?list.name:"list"}</h3>
          {/**A title.
A button to add a new card.
A button to delete the list.
A collection of draggable cards.
*/}
          <ul className="flex flex-col gap-[10px] mt-3 ">
           
      

          {list?.list_task?.map((task,index)=> <li key={`${index}${task.name}`}>
              <Card task={task} />
            </li>)}
            </ul>
          {openInputAddCard ? (
            <textarea
              className="w-[250px] min-h-[60px] border border-inputBorder hover:border-transparent  focus:outline-none rounded-md bg-input p-1 "
              type="text"

              onChange={handleChangeAddCard}
            />
          ) : null}
          <div className="flex pt-2 gap-1  items-center">
            <button
              className="flex  bg-transparent justify-center items-center  hover:bg-gray-500 p-1 rounded"
              onClick={handleAddCard}
            >
              {!openInputAddCard ? (
                <MdAdd style={{ marginRight: "2px" }} color="white" />
              ) : null}
              Add a card
            </button>
            <span
              className="ml-[3px] cursor-pointer text-white hover:bg-gray-500 rounded"
              onClick={handleClose}
            >
              {" "}
              {openInputAddCard ? <MdClose size={20} /> : null}
            </span>
            <button className="flex  bg-transparent justify-center items-center  hover:bg-gray-500 p-1 rounded" onClick={handleDeleteList}>
              <MdDelete style={{ marginRight: "2px" }} color="white" />
              Delete List
            </button>
          </div>
        </div>
      )}
    </>
  );
}
