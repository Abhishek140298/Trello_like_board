import List from "./List";
import { MdAdd } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../app/page";

export default function Board(props) {
  const [openAddList, setOpenAddList] = useState(false);
  const { allLists, setAllLists, newList ,setNewListAdded} = useContext(AppContext);
  console.log(newList, "vjhkjdk");
  const addList = async (newlist) => {
    console.log(newList, "vjhkjdk");

    const response = await fetch("/api/listItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newList),
    });

    const list = await response.json();
  };
  const handleAddList = async () => {
    if (openAddList) {
      const response = await addList(newList);

      console.log("Respinse", response);
    }

    setOpenAddList((prev) => !openAddList);
    setNewListAdded(prev=>!prev)
  };

  return (
    <div className="container w-auto mt-[100px]">
      <ul className="flex  m-10 gap-4 ">
        {allLists?.map((list) => (
          <li key={list?.list_id}>
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
