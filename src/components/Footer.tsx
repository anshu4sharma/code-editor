import Chevron from "./icons/SourceControlIcon";
import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import CheckIcon from "./icons/CheckIcon";
import ReactIcon from "./icons/ReactIcon";

function Footer() {
  return (
    <div className="flex h-8 justify-between bg-[#011627] px-4 text-lg text-white  max-sm:text-sm">
      <div className="flex items-center gap-x-3">
        <a
          className="flex items-center"
          href="https://github.com/manavss/"
          target="_blank"
          rel="noreferrer"
        >
          <Chevron />
        </a>
        <div className="flex cursor-pointer gap-x-1">
          <ErrorIcon />
          <WarningIcon />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <ReactIcon />
        <CheckIcon />
        <div className=" cursor-pointer">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
