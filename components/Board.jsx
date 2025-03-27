import List from "./List";
import { MdAdd } from "react-icons/md";

export default function Board(props) {
  return (
    <div className="container w-auto ">
      <ul className="flex  m-10 gap-4 ">
        <li>
          <List />
        </li>
        <li>
          <List />
        </li>
        <li>
          <div className="flex items-center w-[250px] bg-transparentWhite h-[40px] color-gray-500 rounded-md cursor-pointer">
            <MdAdd /> <button> Add another list</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
