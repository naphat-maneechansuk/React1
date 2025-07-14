import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
  const { data, setData } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("ชาย");
  function saveData(e) {
    e.preventDefault(); 
    const person ={
        id: data.length + 1, // Simple ID generation
        name: name,
        age: age,
        gender:gender
    }
    console.log("Person data:", person);
    setData([...data, person]);
    setName("");
    setAge("");
    setGender("ชาย");
}

  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อ</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>อายุ</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>ชาย</option>
          <option>หญิง</option>
        </select>
        <button type="submit" className="btn-save" disabled={name.trim() === "" || age.trim() === "" || gender.trim() === ""}>
          Save
        </button>
      </form>
    </section>
  );
}
