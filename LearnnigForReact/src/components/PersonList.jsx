import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "../components/PersonList.css";
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
    <div className="container">
      <div className="header">
        <h2>จำนวนประชากร : {data.length}</h2>
        <button onClick={() => setShow(!show)}>
          {show ? "ซ่อน" : "เเสดง"}
        </button>
      </div>
      <ul>
        
        {show && data.map((item) => (
            <li key={item.id}>
              <img src={item.gender == "ชาย" ? boy : girl} width={70} height={70} />
              <p>name : {item.name} | age : {item.age}</p>
              <div className="control">
                <button>ลบ</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
