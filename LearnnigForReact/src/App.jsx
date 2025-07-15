import Header from "./components/Header";
import PersonList from "./components/PersonList";
import { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "John", age: 30, gender: "ชาย" },
    { id: 2, name: "Jane", age: 25, gender: "หญิง" },
    { id: 3, name: "Doe", age: 22, gender: "ชาย" },
    { id: 4, name: "Alice", age: 28, gender: "หญิง" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");

  function deleteUser(id) {
    /*
      const result = data.filter((user)=>user.id !== id);// filter out the user with the given id
      setData(result);
      */
    console.log("Delete user with id:", id);
    setData(data.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
      <div className={`App ${theme}`}>
        <Header
          title="My Application"
          theme={theme}
          setTheme={setTheme}
        ></Header>
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
  );
}
export default App;
