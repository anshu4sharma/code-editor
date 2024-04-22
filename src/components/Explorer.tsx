import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { VscNewFile, VscFolder, VscCollapseAll ,  } from "react-icons/vsc";

const explorerItems = [
  {
    name: "about.html",
    path: "/about",
    icon: IoLogoHtml5,
    color: "#E44D26",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: IoLogoCss3,
    color: "#42A5F5",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: IoLogoJavascript,
    color: "yellow",
  },
];
function Explorer() {
  const [show, setShow] = useState(true);
  return (
    <div
      id="explorer"
      className="flex flex-col min-w-[14vw] items-start border-l border-white/20 bg-[#181818] text-white"
    >
      <h1 className="pl-4 py-2 text-lg font-light uppercase">Explorer</h1>
      <div className="flex w-full flex-col">
        <div
          className="flex gap-2 cursor-pointer items-center w-full px-2 justify-between pl-1 py-1"
          onClick={() => setShow(!show)}
        >
          <div className="flex">
            <BiChevronDown size={24} />
            <p className="text-base font-semibold">PORTFOLIO</p>
          </div>
          <div className="flex gap-2">
            <VscNewFile size={22} />
            <VscFolder size={22} />
            <VscCollapseAll size={22} />
          </div>
        </div>
        {show && (
          <div className="pl-8">
            {explorerItems.map((item) => {
              return (
                <div key={item.name} className="flex gap-2 items-center">
                  <item.icon size={20} color={item.color} />
                  <p className="text-lg font-medium">{item.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
