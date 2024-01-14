import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get("/conversations/find/" + currentId + "/" + user._id);
      setCurrentChat(res.data);
    } catch(err) {
      console.log(err);
    }
  };
  
  return (
    <div className="chatOnline">
    {onlineFriends.map((o) => {
      return (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
            <div className="chatOnlineImgContainer">
                <img 
                    className="chatOnlineImg" 
                    src={
                      o?.profilePicture ? 
                      (o.profilePicture || PF+o.profilePicture) : 
                      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                    }
                    alt=""
                 />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{o?.username}</span>
        </div>
      );
    })}
    </div>
  )
}
