import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar";
import { Avisos } from './Avisos/Avisos'
import { Posteos } from './Posteos/Posteos'

export const Campus = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <Posteos/>
    <Avisos/>
    </div>
  )
}
