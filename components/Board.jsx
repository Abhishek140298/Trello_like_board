import List from "./List";
import { MdAdd } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../app/page";

export default function Board(props) {
  const [openAddList, setOpenAddList] = useState(false);
  const { allLists, setAllLists, newList, setNewListAdded } =
    useContext(AppContext);
  const [indexOfDragedElement, setIndexOfDragElement] = useState();

  const addList = async (newlist) => {
    const response = await fetch("/api/listItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newlist),
    });

    const list = await response.json();
  };
  const handleAddList = async () => {
    if (openAddList) {
      const response = await addList(newList);
    }

    setOpenAddList((prev) => !openAddList);
    setNewListAdded((prev) => !prev);
  };

  const handleDragStart = (e, list, index) => {
    setIndexOfDragElement(index);
  };

  const throttleDragOver = (dragOverFunc, delay) => {
    let timer = true;
    return function (...args) {
      if (timer) {
        dragOverFunc(...args);
        timer = false;

        setTimeout(() => (timer = true), delay);
      }
    };
  };

  const dragFunction = (e, list, index) => {
    e.preventDefault();
    
    setAllLists((prev) => {
      const newUpdateList = [...prev];
      [newUpdateList[index], newUpdateList[indexOfDragedElement]] = [
        newUpdateList[indexOfDragedElement],
        newUpdateList[index],
      ];

      return newUpdateList;
    });
  };
  const handleDragOver = throttleDragOver(dragFunction, 5000);

  const dropElement = (e) => {
    e.preventDefault();
    const res = addList(allLists);
  };

  return (
    <div className="container w-auto mt-[100px]">
      <ul className="flex  m-10 gap-4 " onDragOver={(e) => e.preventDefault()}>
        {allLists?.map((list, index) => (
          <li
            key={list?.list_id}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, list, index)}
            onDragEnter={(e) => {
              e.preventDefault();
              handleDragOver(e, list, index);
            }}
            onDrop={dropElement}
          >
            <List
              isAddNewList={false}
              list={list}
              handleAddList={handleAddList}
            />
          </li>
        ))}

        <li>
          {openAddList ? (
            <List
              isAddNewList={true}
              setOpenAddList={setOpenAddList}
              handleAddList={handleAddList}
            />
          ) : (
            <div
              className="flex items-center w-[250px] bg-transparentWhite h-[40px] color-gray-500 rounded-md cursor-pointer"
              onClick={handleAddList}
            >
              <MdAdd /> <button> Add another list</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
