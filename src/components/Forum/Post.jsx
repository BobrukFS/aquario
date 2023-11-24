import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { Replies } from "./Replies";
import useFetchForo from "../../Hooks/useFetchForo";
import { API_URL } from "../../utilities/constants";
import moment from "moment/moment";

export const Post = () => {
  const { forumId } = useParams();
  const { data, loading, error } = useFetchForo(
    `${API_URL}api/ForumThread/${forumId}`
  );

  return (
    <div className="container">
      <hr />
      <div className="row justify-content-around gap-3">
        {data && data.userName}
        {data && moment(data.timeCreated).format("MMM Do YY")}
      </div>
      <hr />
      <h2>{data && data.title}</h2>
      <p>{data && data.content}</p>
      <Replies />
    </div>
  );
};
