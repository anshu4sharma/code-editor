import EditorReact from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import { useState } from "react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

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

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "someJSCodeExample lorem1",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "someCSSCodeExample",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "someHTMLCodeExample lroem2",
  },
};

const Editor = () => {
  const [fileName, setFileName] = useState("script.js");
  const [code, setCode] = useState("");
  const file = (files as any)[fileName];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex h-[10vh] bg-red-200">
        <p>asdasd</p>
      </div>
      <EditorReact
        height="90vh"
        theme="vs-dark"
        defaultLanguage={file.language}
        defaultValue={file.value}
        value={code}
        line={1}
        className="w-1/2 h-full"
        path={file.name}
        onMount={(editor) => {
          editor.focus();
        }}
      />
      <div className="flex justify-center gap-4 items-center border w-full">
        <button
          disabled={fileName === "script.js"}
          onClick={() => setFileName("script.js")}
        >
          script.js
        </button>
        <button
          disabled={fileName === "style.css"}
          onClick={() => setFileName("style.css")}
        >
          style.css
        </button>
        <button
          disabled={fileName === "index.html"}
          onClick={() => setFileName("index.html")}
        >
          index.html
        </button>
      </div>
    </div>
  );
};

export default Editor;
