import { useState } from "react";
import "../components/PersonList.css";
import User from "./User";

function PersonList(props) {
  const { data } = props;
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
          <User key={item.id} item={item}/>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
