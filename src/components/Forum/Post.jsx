import styles from './Post.module.css'
import { useParams } from "react-router-dom";
import { Replies } from "./Replies";
import { useFetch } from "../../hooks/useFetch";

export const Post = () => {
    const { forumId } = useParams();
    const { data, loading, error } = useFetch(`https://localhost:7154/api/ForumThread/${forumId}`);



  return ( 
   <>
   <h2>{data && data.title}</h2>
   <p>{data && data.content}</p>
   <Replies />
   </>
  )
}
