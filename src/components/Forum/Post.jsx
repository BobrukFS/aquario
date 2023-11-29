import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { Replies } from "./Replies";
import useFetchForo from "../../Hooks/useFetchForo";
import { API_URL } from "../../utilities/constants";
import moment from "moment/moment";
import Header from "../Header/Header";

export const Post = () => {
  const { forumId } = useParams();
  const { data, loading, error } = useFetchForo(
    `${API_URL}api/ForumThread/${forumId}`
  );

  return (<>
   {/* <div className="container">

      <div className="row d-flex justify-content-center gap-3">
        <p>{data && moment(data.timeCreated).format("MMM Do YY")}</p>
      </div>
   
      <h2>{data && data.title}</h2>
      
      <p>{data && data.content}</p>
      <Replies />
    </div>
  */}
   <Header></Header>
   <div className={`p-5 ${styles.contenedor}`}>
    <div className={`${styles.titulo} bg-white px-3 py-4 my-3 border rounded-5`}>
    <h2 className="fs-1 fw-bold">{data && data.title}</h2>
    <p className={`${styles.color} fs-4 fw-light`}>  {data && data.userName}</p>
    <p className="font-xs text-secondary fw-light">Publicacion creada el {data && moment(data.timeCreated).format("MMM Do YY")}</p>
    </div>
    
    <div className="bg-white p-4 border rounded-5 my-4">
      <p className="fs-5">{data && data.content}</p>
    </div>
    <Replies />
   </div>
  
  </>);
};
