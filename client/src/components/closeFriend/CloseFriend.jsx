import { Link } from "react-router-dom";
import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" 
          src={user.profilePicture ?
          user.profilePicture :
          "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
          } 
          alt="" 
        />
        <Link to={"/profile/" + user.username} style={{textDecoration: "none", color: "black"}}>
          <span className="sidebarFriendName">{user.username}</span>
        </Link>
    </li>
  );
}
