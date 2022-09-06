import "./header.css";
import { BsSearch, BsBookmark } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";

export function Header(props) {
  return (
    <div id="headerContainer">
      <div id="dash">
        <span onClick={props.clickHandler}>
          {props.clickHandler}
          <FiMenu />
        </span>
        <h1>{props.title}</h1>
      </div>

      <ul>
        <li>
          <BsSearch />
        </li>
        <li>
          <BsBookmark />
        </li>
        <li>
          <HiOutlineUserCircle size="1.5em" />
        </li>
      </ul>
    </div>
  );
}
