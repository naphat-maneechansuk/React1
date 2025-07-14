import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({ item }) {
  return (
    <div>
      <li style={{ color: item.gender == "ชาย" ? "blue" : "red" }} >
        <img src={item.gender == "ชาย" ? boy : girl} width={70} height={70} />
        <p>
          name : {item.name} | age : {item.age}
        </p>
        <div className="control">
          <button>ลบ</button>
        </div>
      </li>
    </div>
  );
}
