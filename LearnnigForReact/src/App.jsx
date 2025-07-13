import { useState } from "react";

function App() {
  const name ="ณภัทร"
  const [age, setAge] = useState(20);
  function add(){
    setAge(age + 1);
  }
  function subtract(){
    setAge(age - 1);
  }
  return (
    <>
    <div>
      <h1>Naphat {name}</h1>
      <p>Welcome to my React application!</p>
      <p>Age: {age}</p>
      <button onClick={add}>เพิ่มอายุ</button>
      <button onClick={subtract}>ลดอายุ</button>
    </div>
    </>
  );
}
export default App;
