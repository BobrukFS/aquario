import './App.css'
import Fondo from "./components/Login/Fondo/Fondo"
import { Routes, Route} from "react-router-dom"
import { Avisos } from './components/Avisos/Avisos'
import {Perfil} from './components/Perfil/Perfil';
import { Publicaciones } from './components/Perfil/Publicaciones/Publicaciones';
const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element= { <Fondo/> }> </Route>    
        <Route path="/avisos" element= { <Avisos/> }> </Route>
        <Route path="/perfil" element= { <Perfil/> }> </Route>
        <Route path="/perfil/publicaciones" element={<Publicaciones/>}></Route>
                
      </Routes>
     

    
    </div>
  )
}

export default App
