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
    <h2 >{data && data.title}</h2>
    <p className="font-xs">  {data && data.userName}</p>
    <p className="font-xs text-secondary">Publicacion creada el {data && moment(data.timeCreated).format("MMM Do YY")}</p>
    </div>
    
    <div className="bg-white p-4 border rounded-5 my-4">
      <p className="">{data && data.content}</p>
    </div>
    <Replies />
   </div>
  
  </>);
};
