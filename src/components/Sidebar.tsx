import React from "react";
import { BiGitBranch } from "react-icons/bi";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
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
  setSelectedIndex,
}: Props) {
  return (
    <div className={`w-20 bg-gray-900 flex justify-between flex-col`}>
      <div className="flex justify-center flex-col gap-4">
        <div
          className={`${
            expanded ? "border-l-4 border-white" : "border-l-4"
          } cursor-pointer`}
          onClick={() => setExpanded(!expanded)}
        >
          <div
            className={`flex justify-center my-3 ${
              expanded ? "text-white" : "text-gray-600"
            } text-3xl`}
          >
            <VscFiles />
          </div>
        </div>
        <a
          target="_blank"
          href={"https://github.com/noworneverev/react-vscode-portfolio"}
          className="cursor-pointer flex justify-center"
        >
          <div className="flex items-center justify-center my-1 text-gray-600 text-3xl">
            <BiGitBranch />
          </div>
        </a>
        <div
          className="flex justify-center flex-col pb-2"
        >
          <a
            onClick={() => {
              setSelectedIndex(-1);
            }}
            className="cursor-pointer flex justify-center"
          >
            <div className="flex items-center justify-center my-1 text-gray-600 text-3xl hover:text-white">
              <VscSettingsGear />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
