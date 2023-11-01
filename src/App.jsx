import './App.css'
import Fondo from "./components/Login/Fondo/Fondo"
import { Routes, Route} from "react-router-dom"
import { Avisos } from './components/Avisos/Avisos'
import {Perfil} from './components/Perfil/Perfil';
const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element= { <Fondo/> }> </Route>    
        <Route path="/avisos" element= { <Avisos/> }> </Route>
        <Route path="/perfil" element= { <Perfil/> }> </Route>
        
                
      </Routes>
     

    
    </div>
  )
}

export default App
