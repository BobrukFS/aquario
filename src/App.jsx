import './App.css'
import Fondo from "./components/Login/Fondo/Fondo"
import { Routes, Route} from "react-router-dom"
import { Avisos } from './components/Avisos/Avisos'

const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element= { <Fondo/> }> </Route>    
        <Route path="/avisos" element= { <Avisos/> }> </Route>
        
                
      </Routes>
     

    
    </div>
  )
}

export default App
