import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({conversation, currentUser}) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => (m !== currentUser._id));

    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setUser(res.data);
      } catch(err) {
        console.log(err);
      }
    }; 
    getUser();
  }, [currentUser, conversation])

  return (
    <div className="conversation">
        <img 
            className="conversationImg" 
            src={
              user?.profilePicture ? 
              (PF+user.profilePicture || user.profilePicture) : 
              "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
            }
            alt=""
         />
        <span className="conversationName">{user?.username}</span>
    </div>
  )
}
