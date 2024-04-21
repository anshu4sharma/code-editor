import EditorReact, { MonacoDiffEditor } from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { RxCross2 } from "react-icons/rx";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { emmetHTML, emmetCSS  , } from "emmet-monaco-es";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });

const files: Record<
  string,
  {
    name: string;
    language: string;
    value: string;
  }
> = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "",
  },
};

const Editor = () => {
  const [fileName, setFileName] = useState("index.html");
  const [code, setCode] = useState<string>("");
  const file = files[fileName];
  const [openTab, setOpenTab] = useState(1);
  const handleCodeChange = (value?: string) => {
    setCode(value || "");
  };

  const disposeEmmetHTMLRef = useRef<any>();
  const disposeEmmetCSSRef = useRef<any>();

  const handleEditorWillMount = (monaco: any) => {
    disposeEmmetHTMLRef.current = emmetHTML(monaco);
    disposeEmmetCSSRef.current = emmetCSS(monaco);
  };

  useEffect(() => {
    return () => {
      disposeEmmetHTMLRef.current ? disposeEmmetHTMLRef.current() : null;
      disposeEmmetCSSRef.current ? disposeEmmetCSSRef.current() : null;
    };
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <Tabs openTab={openTab} setOpenTab={setOpenTab} />
      <EditorReact
        height="94vh"
        theme="vs-dark"
        defaultLanguage={file.language}
        defaultValue={file.value}
        value={code}
        line={1}
        className="w-1/2 h-full"
        path={file.name}
        beforeMount={handleEditorWillMount}
        onChange={handleCodeChange}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 18,
          // wordWrap: wrap ? 'on' : 'off',
          smoothScrolling: true,
        }}
      />
    </div>
  );
};

export default Editor;

const Tabs = ({
  openTab,
  setOpenTab,
}: {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="h-[6vh] flex w-full bg-[#181818]">
      <div
        className={
          "text-xs font-bold flex  cursor-pointer justify-between gap-4 items-center px-6 py-4  leading-normal " +
          (openTab === 1
            ? "text-white border-t-2 border-blue-500 bg-[#131313]"
            : "text-[#b2b2b2] ")
        }
        onClick={() => {
          setOpenTab(1);
        }}
      >
        <IoLogoHtml5 color="#E44D26" size={20} /> <p> index.html</p>
        <RxCross2 size={18} />
      </div>
      <div
        className={
          "text-xs font-bold flex  cursor-pointer justify-between gap-4 items-center px-6 py-4  leading-normal " +
          (openTab === 2
            ? "text-white border-t-2 border-blue-500 bg-[#131313]"
            : "text-[#b2b2b2] ")
        }
        onClick={() => {
          setOpenTab(2);
        }}
      >
        <IoLogoCss3 color="#42A5F5" size={20} />
        <p> style.css</p>
        <RxCross2 size={18} />
      </div>
      <div
        className={
          "text-xs font-bold flex  cursor-pointer justify-between gap-4 items-center px-6 py-4  leading-normal " +
          (openTab === 3
            ? "text-white border-t-2 border-blue-500 bg-[#131313]"
            : "text-[#b2b2b2] ")
        }
        onClick={() => {
          setOpenTab(3);
        }}
      >
        <IoLogoJavascript color="yellow" size={20} />

        <p> main.js</p>
        <RxCross2 size={18} />
      </div>
    </div>
  );
};
