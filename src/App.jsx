import "./App.css";
import Fondo from "./components/Login/Fondo/Fondo";
import { Routes, Route } from "react-router-dom";
import { Perfil } from "./components/Perfil/Perfil";
import { Participantes } from "./components/Participantes/Participantes";

import { Publicaciones } from "./components/Perfil/Publicaciones/Publicaciones";
import { Campus } from "./components/Campus/Campus";
import { Forum } from "./components/Forum/Forum";
import { Post } from "./components/Forum/Post";
import AuthProvider from "./provider/authProvider";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Fondo />}>
            {" "}
          </Route>
          <Route path="/campus" element={<Campus />}>
            {" "}
          </Route>
          <Route path="/perfil" element={<Perfil />}>
            {" "}
          </Route>
          <Route path="/participantes" element={<Participantes />}></Route>

          <Route
            path="/perfil/publicaciones"
            element={<Publicaciones />}
          ></Route>
          <Route path="/foro" element={<Forum />}></Route>
          <Route path="/foro/:forumId" element={<Post />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
