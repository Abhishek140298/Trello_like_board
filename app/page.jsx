"use client"
import Board from "../components/Board"
import {useEffect,useState} from 'react'

export default function Page() {

useEffect(()=>{
  fetchList()
},[])

const fetchList=async()=>{
  const list=await fetch('/api/listItem',{method:'POST',
    headers: { "Content-Type": "application/json" },
  })
  console.log("No need to d",list)
}

    return <>
    <Board/>
    </>
  }