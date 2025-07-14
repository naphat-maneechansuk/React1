import Header from "./components/Header";
import PersonList from "./components/PersonList";
import { useState } from "react";
import "./App.css";

function App() {
   const [data, setData] = useState([
      { id: 1, name: "John", age: 30, gender: "ชาย" },
      { id: 2, name: "Jane", age: 25, gender: "หญิง" },
      { id: 3, name: "Doe", age: 22, gender: "ชาย" },
      { id: 4, name: "Alice", age: 28, gender: "หญิง" },
    ]);
 
  return (
    <div className="App">
    <Header title="My Application"></Header>
    <main>
    <PersonList data={data}/>
    </main>
    </div>
  );
}
export default App;
