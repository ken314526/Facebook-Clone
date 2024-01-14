import "./topbar.css";
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">ANIMEBOOK</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                        <span className="topbarLink">HOMEPAGE</span>
                    </Link>
                    <Link to={`/profile/${user.username}`} style={{textDecoration: "none", color: "white"}}>
                        <span className="topbarLink">TIMELINE</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Link to={"/messenger"} style={{textDecoration: "none", color: "white"}}>
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </Link>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img 
                        src={
                            user.profilePicture ? 
                            PF+user.profilePicture : 
                            "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                            } 
                        className="topbarImg" 
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}
