import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const explorerItems = [
//   {
//     name: "home.jsx",
//     path: "/",
//     // icon: `${react_icon}`,
//   },
  {
    name: "about.html",
    path: "/about",
    // icon: `${html_icon}`,
  },
  {
    name: "contact.css",
    path: "/contact",
    // icon: `${css_icon}`,
  },
  {
    name: "projects.js",
    path: "/projects",
    // icon: `${js_icon}`,
  },
];
function Explorer() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-start  bg-[#011627] text-white max-sm:hidden">
      <h1 className="pl-4 text-2xl font-medium uppercase">Explorer</h1>
      <div className="flex min-w-[15vw] flex-col">
        <div
          className="flex cursor-pointer items-center pl-1 pt-2 "
          onClick={() => setShow(!show)}
        >
          {/* <ChevronRight style={show ? { transform: "rotate(90deg)" } : {}} /> */}
          <BiChevronDown size={24} />
          <p className=" text-lg font-semibold">PORTFOLIO</p>
        </div>
        {show && (
          <div className="pl-8">
            {explorerItems.map((item) => {
              return (
                <a
                  href={`${item.path}`}
                  key={item.name}
                  className=" flex  gap-x-1 "
                >
                  {/* <img
                    src={(item as any).icon}
                    alt={item.name}
                    height={20}
                    width={20}
                  /> */}
                  <p className=" text-lg font-medium">{item.name}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
