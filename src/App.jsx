import './App.css'
import Fondo from "./components/Login/Fondo/Fondo"
import { Routes, Route} from "react-router-dom"
import { Avisos } from './components/Avisos/Avisos'
import {Perfil} from './components/Perfil/Perfil';
import { Participantes } from './components/Participantes/Participantes';

const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element= { <Fondo/> }> </Route>    
        <Route path="/avisos" element= { <Avisos/> }> </Route>
        <Route path="/perfil" element= { <Perfil/> }> </Route>
        <Route path="/participantes" element= { <Participantes/> }></Route>
        
                
      </Routes>
     

    
    </div>
  )
}

export default App
