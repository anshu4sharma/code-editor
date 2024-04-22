import React from "react";
import { VscFiles, VscSearch } from "react-icons/vsc";
interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({
  expanded,
  setExpanded,
  // setSelectedIndex,
}: Props) {
  return (
    <div className={`w-20 bg-[#181818] flex justify-between flex-col pr-4 py-2`}>
      <div className="flex justify-center flex-col gap-4">
        <div
          className={`border-white border-l-4 pl-4 cursor-pointer`}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center justify-center my-1 text-3xl text-white">
          {/* <div className="flex items-center justify-center my-1 text-gray-600 text-3xl "> */}
            <VscFiles />
          </div>
        </div>
        <div className="flex justify-center flex-col pb-2">
          <div
            className="cursor-pointer flex justify-center"
          >
            <div className="flex items-center justify-center my-1 text-gray-600 text-3xl hover:text-white">
              <VscSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
