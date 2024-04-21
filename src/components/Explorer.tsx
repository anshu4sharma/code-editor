import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { HiDocumentPlus } from "react-icons/hi2";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { PiFolderSimplePlusFill } from "react-icons/pi";

const explorerItems = [
  {
    name: "about.html",
    path: "/about",
    icon: IoLogoHtml5,
    color:"#E44D26" 
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: IoLogoCss3,
    color:"#42A5F5"
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: IoLogoJavascript,
    color:"yellow" 
  },
];
function Explorer() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-start border-l border-white/20 bg-[#181818] text-white max-sm:hidden">
      <h1 className="pl-4 py-2 text-xl font-medium uppercase">Explorer</h1>
      <div className="flex min-w-[15vw] flex-col">
        <div
          className="flex gap-2 cursor-pointer px-2 items-center justify-between pl-1 py-1"
          onClick={() => setShow(!show)}
        >
        <div className="flex">
        <BiChevronDown size={24} />
          <p className="text-base font-semibold">PORTFOLIO</p>
        </div>
          <div className="flex gap-2">
            <HiDocumentPlus size={20} />
            <PiFolderSimplePlusFill size={22} />
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
