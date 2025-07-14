import "./AddForm.css";
import { useState } from "react";

export default function AddForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("ชาย");

    return (
        <section>
            <form className="container">
                <label>Userame</label>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                <label>Age</label>
                <input type="number" value={age} onChange={(event)=>setAge(event.target.value)}/>
                <select value={gender} onChange={(event)=>setGender(event.target.value)}>
                    <option>Man</option>
                    <option>Woman</option>
                </select>
                <button type="submit" className="btn-save">Save</button>
            </form>
        </section>
    )
}