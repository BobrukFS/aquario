import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./Replies.module.css";
import { useParams } from "react-router-dom";
import useFetchForo from "../../Hooks/useFetchForo";
import { API_URL } from "../../utilities/constants";
import { jwtDecode } from "jwt-decode";

export const Replies = () => {
  const [form, setForm] = useState({});
  const { forumId } = useParams();
  const { data, loading, error } = useFetchForo(
    `${API_URL}api/ForumThread/${forumId}`
  );
  const [repliesWithUserNames, setRepliesWithUserNames] = useState([]);
  const token = localStorage.getItem("token");
  const decodedJwt = jwtDecode(token);
  const [imagenPerfil, setImagenPerfil] = useState([]);
  const prevUserIds = useRef([]);

  const loggedUser =
    decodedJwt[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
    ];

  const loggedUserId =
    decodedJwt[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];

  const fetchProfileImages = async () => {
    try {
      const userIds = repliesWithUserNames.map((reply) => reply.userId);

      const responses = await Promise.all(
        userIds.map((userId) => axios.get(`${API_URL}api/Auth/${userId}`))
      );

      const updatedReplies = repliesWithUserNames.map((reply, index) => ({
        ...reply,
        image: responses[index].data.profilePictureUrl,
      }));

      setRepliesWithUserNames(updatedReplies);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [estado, setEstado] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}api/Auth/${loggedUserId}`)
      .then((x) => setImagenPerfil(x.data.profilePictureUrl));
    if (data && repliesWithUserNames.length == 0) {
      setRepliesWithUserNames(data.replies);
      setEstado(false);
    } else if (data) {
      fetchProfileImages();
    }
  }, [data, estado]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    const { content } = form;
    try {
      // Make the axios.post call
      const postResponse = await axios.post(`${API_URL}api/Reply`, {
        forumThreadId: forumId,
        content,
      });

      // Update state with the new reply
      setRepliesWithUserNames((prevReplies) => [
        ...prevReplies,
        postResponse.data,
      ]);

      // Make the axios.get call using the userId from the postResponse
      const userId = postResponse.data.userId;
      const getResponse = await axios.get(`${API_URL}api/Auth/${userId}`);

      // Update state with the profile picture URL
      setRepliesWithUserNames((prevReplies) =>
        prevReplies.map((reply) =>
          reply.userId === userId
            ? { ...reply, image: getResponse.data.profilePictureUrl }
            : reply
        )
      );
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
      <div className="bg-white rounded-5 py-1 px-5 d-flex flex-column align-items-start">
        {repliesWithUserNames &&
          repliesWithUserNames.map((reply) => (
            <div className="my-5 w-100" key={reply.id}>
              <div
                className={`${styles.contenedor} d-flex align-items-center gap-2  p-2 px-4`}
              >
                <img
                  className="rounded rounded-circle"
                  style={{ width: 60, height: 60 }}
                  src={reply.image}
                  alt=""
                />
                <h3 className="font-xs text-secondary fw-light">
                  {reply.userName}
                </h3>
              </div>
              <div
                className={`${styles.comentario} px-2 py-4 d-flex align-items-center`}
              >
                <div style={{ width: 80 }}></div>
                <p className={`text-black font-info fw-light `}>
                  {reply.content}
                </p>
              </div>
              {loggedUser === reply.userName && (
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteReply(reply.id)}
                >
                  Borrar Comentario
                </button>
              )}
            </div>
          ))}
        <form      onSubmit={handleReplySubmit} className="d-flex w-100 p-0 ">
        <div className={`${styles.responder} d-flex flex-column container-fluid align-self-center my-5 py-2 px-3  w-100 rounded-5`}>

          <textarea
            onChange={handleChange}
            className="mt-3 w-100 rounded-3 font-xs p-2"
            name="content"
              placeholder="Escribe tu respuesta aqui"
            style={{ resize: "none", height: 100}}
          ></textarea>
          <button type="submit" className={`${styles.button} align-self-end bg-white text-dark mt-3`}>
            Responder
          </button>
          </div>
        </form>
        </div>
 
    </>
  );
};
