import styles from "./ForumPost.module.css";
import leftArrow from "../../assets/left.png";
import circle from "../../assets/ellipse.png";
import speechBubble from "../../assets/speechbubble.png";
import { Link } from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export const ForumPost = ({
  title,
  id,
  tag,
  comments,
  userId,
  timeCreated,
}) => {
  const [userData, setUserData] = useState({});

  const tagColors = (tag) => {
    switch (tag) {
      case "Programación":
        return "#405faf";
      case "Ayuda":
        return "rgb(86, 214, 169)";

      case "Material":
        return "#e85704";

      case "Avisos":
        return "#772849";

      case "Eventos":
        return "#3e3d3d";
    }
  };

  useEffect(() => {
    axios.get(`${API_URL}api/Auth/${userId}`).then((x) => setUserData(x.data));
  }, []);

  return (
    <div className={`${styles.contenedor} mt-5`}>
      <img className={styles.circle} src={userData.profilePictureUrl} alt="" />
      <div className={styles.newPost}>
        <div className={styles.newPostTitle}>
          <span>
            <Link to={`/foro/${id}`}><p>{title}</p></Link>
          </span>
        </div>
        <div className={`styles.newPostUser`}>
          <div className="d-flex align-items-center">
          <img className={styles.arrow} src={leftArrow} alt="" />
          <p className="font-xs text-secondary">{userData && userData.firstName + " " + userData.lastName}{" "}</p>
          </div>
      
          <span className="font-info text-secondary">{moment(timeCreated).fromNow()}</span>
        </div>
      </div>
      <div className="d-flex flex-column gap-1 align-items-center">
    
      <div
        className={`${styles.forumTag}`}
        style={{ backgroundColor: tagColors(tag) }}
      >
        <p className="font-info text-white">{tag}</p>
      </div>
      <div className={`${styles.comments} d-flex align-items-center`}>
        
        <p className="text-secondary font-info fw-bold ">{comments}</p>
        <img style={{width:15}} src={speechBubble} alt="" />
      </div>
          
      </div>
    </div>
  );
};
