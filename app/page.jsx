"use client"
import Board from "../components/Board"
import {useEffect,useState,createContext} from 'react'

export const AppContext=createContext(null)

export default function Page() {
const [allLists,setAllLists]=useState([])
const [newList,setNewList]=useState({})
const[newListAdded,setNewListAdded]=useState(false)

useEffect(()=>{
  fetchList()
},[newListAdded])

const fetchList=async()=>{
  const response=await fetch('/api/listItem',{method:'GET',
    headers: { "Content-Type": "application/json" },
  })


const list=await response.json()



setAllLists(list?.data?.lists)
}

    return <>
    <AppContext.Provider value={{allLists,setAllLists,newList,setNewList,setNewListAdded}}>
    <Board />
    </AppContext.Provider>
    </>
  }