import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Usuario } from './Usuario/Usuario'
import styles from './Participantes.module.css'

export const Participantes = () => {
    return (
        <div>
            <Header/>
            <Navbar/>

            <section className= {styles.usuarios}>
                <Usuario nombre="Juan" role="Alumno"/> {/* props paso datos a mi componente */}
                <Usuario nombre="Ana" role="Alumno"/>
                <Usuario nombre="Carlos" role="Alumno"/>
                <Usuario nombre="Juan" role="Alumno"/>
                <Usuario nombre="Ana" role="Alumno"/>
                <Usuario nombre="Carlos" role="Alumno"/>
                <Usuario nombre="María Sol" role="coordinadora"/>
                <Usuario nombre="Lucía Flores" role="coordinadora"/>
                
            </section>
        </div>
    )
}