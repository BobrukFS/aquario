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
        return "#004a30";

      case "Material":
        return "#e85704";

      case "Avisos":
        return "#28772b";

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
            <Link to={`/foro/${id}`}>{title}</Link>
          </span>
        </div>
        <div className={styles.newPostUser}>
          <img className={styles.arrow} src={leftArrow} alt="" />
          {userData && userData.firstName + " " + userData.lastName}{" "}
          <span>{moment(timeCreated).fromNow()}</span>
        </div>
      </div>
      <div
        className={styles.forumTag}
        style={{ backgroundColor: tagColors(tag) }}
      >
        {tag}
      </div>
      <div className={styles.comments}>
        <img src={speechBubble} alt="" />
        {comments}
      </div>
    </div>
  );
};
