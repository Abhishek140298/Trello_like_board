"use client";
import React from "react";

const Header = React.memo(() => {
  return (
    <div className=" flex p-5 justify-between  bg-gray-100">
      <span className="flex bg-black p-4 inline-block w-[100px] h-[40px] justify-center justify-center items-center rounded">
 
        <img src="https://trello.com/assets/87e1af770a49ce8e84e3.gif" />
       </span>
   
    
      <button className="bg-customBlue ml-20 w-[100px] h-[40px] rounded ">Clear</button>
    </div>
  );
});

export default Header;
