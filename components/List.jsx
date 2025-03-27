"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function List(props) {
  const [openInputAddCard, setOpenInputAddCard] = useState(false);

  const handleAddCard = () => {
    setOpenInputAddCard(true);
  };

  const handleClose = () => {
    setOpenInputAddCard((prev) => false);
  };

  return (
    <div className="bg-listCard rounded-[10px] min-w-[250px] min-h-[95px] p-5 text-white flex gap-[10px] flex-col">
      <h3 className="font-bold ">Todo</h3>
      {/**A title.
A button to add a new card.
A button to delete the list.
A collection of draggable cards.
*/}
      <ul className="flex flex-col gap-[10px] mt-3 ">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>

      {openInputAddCard ? (
        <textarea
          className="w-[250px] min-h-[60px] border border-inputBorder hover:border-transparent  focus:outline-none rounded-md bg-input p-1 "
          type="text"
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
        <button className="flex  bg-transparent justify-center items-center  hover:bg-gray-500 p-1 rounded">
          <MdDelete style={{ marginRight: "2px" }} color="white" />
          Delete List
        </button>
      </div>

    </div>
  );
}
