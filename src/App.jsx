import './App.css'
import Fondo from "./components/Login/Fondo/Fondo"
import { Routes, Route} from "react-router-dom"
import {Perfil} from './components/Perfil/Perfil';
import { Publicaciones } from './components/Perfil/Publicaciones/Publicaciones';
import { Campus } from './components/Campus/Campus';
const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element= { <Fondo/> }> </Route>    
        <Route path="/campus" element= { <Campus/> }> </Route>
        <Route path="/perfil" element= { <Perfil/> }> </Route>
        <Route path="/perfil/publicaciones" element={<Publicaciones/>}></Route>
                
      </Routes>
     

    
    </div>
  )
}

export default App
