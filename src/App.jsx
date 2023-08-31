import './App.css'
import { Fondo }  from "./components/Login/Fondo/Fondo"
import { Forum } from './components/Forum/Forum'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Post } from './components/Forum/Post';
import AuthProvider from './provider/authProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Fondo />,
  },
  {

    path: "/login",
    element: <Fondo />,
  },
  {
    path: "/foro",
    element: <Forum/>
  },
  {
   path: "/foro/:forumId",
   element: <Post/>
  }
]);

const App = () => {
  return (
    <>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
    </>
  )
}

export default App
