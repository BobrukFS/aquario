import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Usuario } from './Usuario/Usuario'
import styles from './Participantes.module.css'
import alumnos from './json/alumnos.json'

export const Participantes = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <section className={styles.usuarios}>
                <div className={styles.usuariosMobile}>
                    <div className={styles.botones}>
                        <button className={styles.botonAlumno}>Alumnos</button>
                        <button className={styles.botonCoordinadora}>Coordinadoras</button>
                    </div>
                    <div className={styles.orden}>
                        <div>
                            <h3>Participantes</h3>
                            <p>Total: 46</p>
                        </div>
                        <div>
                            <select className={styles.select} name="" id="">
                                <option selected>Ordenar por</option>
                                <option value="Alumno">Alumno</option>
                                <option value="Coordinadora">Coordinadora</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.buscador}>
                        <input className={styles.input} type="text" />
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></span>
                    </div>
                </div>
                <div className={styles.noVisible}>
                    <p>Nombre</p>
                    <p>Rol</p>
                </div>

                {
                    alumnos.map((info) =>(
                        <Usuario 
                            imagen= {info.imagen}
                            nombre= {info.nombre} 
                            role={info.rol} 
                            apellido={info.apellido}
                        />
                    ))
                }
                {/* <Usuario nombre="Juan López" role="Alumno" /> 
                <Usuario nombre="Ana" role="Alumno" />
                <Usuario nombre="Carlos" role="Alumno" />
                <Usuario nombre="Juan" role="Alumno" />
                <Usuario nombre="Ana" role="Alumno" />
                <Usuario nombre="Carlos" role="Alumno" />
                <Usuario nombre="María Sol" role="coordinadora" />
                <Usuario nombre="Lucía Flores" role="coordinadora" /> */}
            </section>
        </div>
    )
}