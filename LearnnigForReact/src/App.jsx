import { useState } from "react";

function App() {
  const name ="ณภัทร"
  const [age, setAge] = useState(20);
  const [data, setData] = useState([
    { id: 1, name: "smith" ,gender:"ชาย"},
    { id: 2, name: "saba" ,gender:"หญิง"},
    { id: 3, name: "kalob" ,gender:"ชาย"},
    { id: 4, name: "sara" ,gender:"หญิง"}
  ]);
  
  const[show, setShow] = useState(true);

  return (
    <>
    <div>
      <h1>Naphat {name}</h1>
      <p>Welcome to my React application!</p>
      <p>Age: {age}</p>
      <button onClick={()=>setAge(age+1)}>เพิ่มอายุ</button>
      <button onClick={()=>setAge(age-1)}>ลดอายุ</button>
      <br />
      <button onClick={()=>setAge(20)}>ล้าง</button>
      <hr />
      <h2>Data List</h2>
      <h3>จำนวนประชากร {data.length}</h3>
      <ul>
        {data.map((item)=>(
          <li key={item.id}>{item.name} | {item.gender}</li>
        ))}
        
      </ul>

    </div>
    </>
  );
}
export default App;
