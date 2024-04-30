import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { VscNewFile, VscFolder, VscCollapseAll } from "react-icons/vsc";
import useActiveTabs from "../store/useActiveTabs";
import clsx from "clsx";
import useFiles from "../store/useFiles";
import AddIcons from "./AddIcons";

function Explorer() {
  const [show, setShow] = useState(true);
  const { tab, changeTab } = useActiveTabs((state) => state);
  const { files, createFile } = useFiles((state) => state);

  return (
    <div
      id="explorer"
      className="flex flex-col min-w-[14vw] items-start border-l border-white/20 bg-[#181818] text-white"
    >
      <h1 className="pl-4 py-2 text-lg font-light uppercase">Explorer</h1>
      <div className="flex w-full flex-col">
        <div className="flex gap-2 cursor-pointer items-center w-full px-2 justify-between pl-1 py-1">
          <div className="flex" onClick={() => setShow(!show)}>
            <BiChevronDown size={24} />
            <p className="text-base font-semibold">PORTFOLIO</p>
          </div>
          <div className="flex gap-2">
            <VscNewFile
              onClick={() =>
                createFile({
                  fileId: 1,
                  // icon:IoLogoJavascript,
                  title: "index.css",
                })
              }
              size={22}
            />
            <VscFolder size={22} />
            <VscCollapseAll size={22} />
          </div>
        </div>
        {show && (
          <React.Fragment>
            {files.map((file, index) => {
              return (
                <div
                  key={file.fileId}
                  onClick={() => changeTab(index + 1)}
                  className={clsx(
                    "flex w-full justify-start gap-2 items-center py-1 cursor-pointer pl-4",
                    {
                      "bg-[#242424]": tab == index + 1,
                    }
                  )}
                >
                  <AddIcons extension={file.title} key={index} />
                  <p className="text-lg font-medium">{file.title}</p>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Explorer;
