import "./message.css";
import { format } from "timeago.js";
import { Delete } from "@mui/icons-material";
import axios from "axios";

export default function Message({message, own}) {
  const handleClick = async (e) => {
    try {
      await axios.delete("/messages/delete/" + message._id);
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  };
  
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img 
                className="messageImg" 
                src="https://www.looper.com/img/gallery/demon-slayer-tanjiros-powers-explained/l-intro-1620401706.jpg" 
                alt=""
             />
            <p className="messageText">{message?.text}</p>
            <Delete onClick={handleClick} className="messageDeleteButton" />
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
