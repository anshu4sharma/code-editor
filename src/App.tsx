import Editor from "./components/Editor";
import Explorer from "./components/Explorer";
import Html_Output from "./components/Html_Output";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="flex">
        <Sidebar
          expanded={false}
          setExpanded={() => {}}
          darkMode={false}
          handleThemeChange={() => {}}
          setSelectedIndex={() => {}}
        />
        <Explorer />
          <Editor />
        <Html_Output />
      </div>
    </div>
  );
};

export default App;
