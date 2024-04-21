import Editor from "./components/Editor";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen h-full">
      {/* <NavBar /> */}
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
      </div>
    </div>
  );
};

export default App;
