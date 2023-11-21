import  "./Campus.module.css"
import { NavBarCampus } from "./NavBarCampus"
import Chat_icon from "../../assets/chat_icon.png"

export const Campus = () => {
    return(
    <div >
       <NavBarCampus/> 
        <nav className="NavCampus">

            <h1>kjhkhfj</h1>

       
            <a href="">Foro General</a>
            <a href="">Mi centro pescar</a>
        </nav>

        <div>
            <a href="">Avisos</a>
            <a href="">Participantes</a> 
            <a href="">Calendario</a>
        </div>


        <main>
        <div className="Avisos">
          <img src={Chat_icon} height={50} alt="" /> <a href=""> <h2>Avisos</h2></a>

        </div>
        <div>
            <h4>Clase 1</h4>
            <h4>Clase 2</h4>
            <h4>Clase 3</h4>
            <h4>Clase 4</h4>
            <h4>Clase 5</h4>

        </div>


       </main>
      
    

    </div>
)
}