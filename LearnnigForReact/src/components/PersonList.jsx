import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "John", age: 30, gender: "ชาย" },
    { id: 2, name: "Jane", age: 25, gender: "หญิง" },
    { id: 3, name: "Doe", age: 22, gender: "ชาย" },
    { id: 4, name: "Alice", age: 28, gender: "หญิง" },
  ]);
  const [show, setShow] = useState(true);
  console.table(data);

  return (
    <div>
      <h2>Data List</h2>
      <h1>จำนวนประชากร : {data.length}</h1>
      
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "เเสดง"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender=="ชาย" ? boy:girl} width={70} height={70}/>
              name : {item.name} | age : {item.age}
             
            </li>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
