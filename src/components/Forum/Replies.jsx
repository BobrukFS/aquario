import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Replies.module.css';
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const Replies = () => {
  const [form, setForm] = useState({});
  const { forumId } = useParams();
  const { data, loading, error } = useFetch(`https://localhost:7154/api/ForumThread/${forumId}`);
  const [repliesWithUserNames, setRepliesWithUserNames] = useState([]);

  useEffect(() => {     
           if (data) {
            setRepliesWithUserNames(data.replies);

           }    
  }, [data]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    const { content } = form;
    try {
      const response = await axios.post('https://localhost:7154/api/Reply', {
        forumThreadId: forumId,
        content,
      });
            setRepliesWithUserNames((prevReplies) => 
              [...prevReplies, response.data ]
            );
          
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  

 const handleDeleteReply = (id) => {
  axios.delete(`https://localhost:7154/api/Reply/${id}`)
    .then((resp) => setRepliesWithUserNames((prevReplies) => {
      const updatedReplies = prevReplies.filter(reply => reply.id !== id);
        return updatedReplies;
    }))
 }     

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>Respuestas:</h3>
      {repliesWithUserNames && repliesWithUserNames.map((reply) => (
        <div key={reply.id}>
          {reply.userName}
          <p>{reply.content}</p>
          <button className="btn btn-danger" onClick={() => handleDeleteReply(reply.id)}>Borrar Comentario</button>
        </div>
      ))}
      <form onSubmit={handleReplySubmit}>
        <textarea
          onChange={handleChange}
          className="mt-3"
          name="content"
          cols="35"
          rows="5"
        ></textarea>
        <button type="submit" className={`${styles.button} mt-3`}>
          Responder
        </button>
      </form>
    </>
  );
};