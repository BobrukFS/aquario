import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Replies.module.css";
import { useParams } from "react-router-dom";
import useFetchForo from "../../Hooks/useFetchForo";
import { API_URL } from "../../utilities/constants";

export const Replies = () => {
  const [form, setForm] = useState({});
  const { forumId } = useParams();
  const { data, loading, error } = useFetchForo(
    `${API_URL}/api/ForumThread/${forumId}`
  );
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
      const response = await axios.post(`${API_URL}/api/Reply`, {
        forumThreadId: forumId,
        content,
      });
      setRepliesWithUserNames((prevReplies) => [...prevReplies, response.data]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDeleteReply = (id) => {
    axios.delete(`${API_URL}api/Reply/${id}`).then((resp) =>
      setRepliesWithUserNames((prevReplies) => {
        const updatedReplies = prevReplies.filter((reply) => reply.id !== id);
        return updatedReplies;
      })
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>Respuestas:</h3>
      {repliesWithUserNames &&
        repliesWithUserNames.map((reply) => (
          <div key={reply.id}>
            {reply.userName}
            <p>{reply.content}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteReply(reply.id)}
            >
              Borrar Comentario
            </button>
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
