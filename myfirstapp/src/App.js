import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
import WelcomeDialog from "./components/WelcomeDialog";

function App() {
  const [flag, setFlag] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const userInfo = {
    firstname: "Mickey",
    lastname: "BerryZ",
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm",
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run React app with npm command",
    },
    {
      id: 4,
      title: "Build Components",
      content: "You can run React app with npm command",
    },
    {
      id: 5,
      title: "Define States",
      content: "You can run React app with npm command",
    },
    {
      id: 6,
      title: "React Hooks",
      content: "You can run React app with npm command",
    },
    {
      id: 7,
      title: "Forms hanlding",
      content: "You can run React app with npm command",
    },
  ];


  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  // const toggle = () => {
  //   console.log("Toggle Clicked");
  //   setFlag(!flag);
  // };
 
  return (
    <>
      {/* <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
        {flag ? <Clock /> : "No Clock component"} */}
        {/* <Welcome user = "Mickey"/>
        <Welcome user = "BerryZ"/>
        <Welcome user = "TestReact"/> */}
        {/* <LoginControl/> */}
        {/* <Blog posts={posts} /> */}
        {/* <Form /> */}
        {/* <Search searchTerm={searchTerm} handleSearch={handleSearch}/> */}
        {/* <List list={filterList}/> */}
        <WelcomeDialog />
    </>

  );
}

export default App;
