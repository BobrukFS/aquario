import styles from './Usuario.module.css'

export const Usuario = (props) => {

    return (
        <>
            {
                props.role == "coordinadora"
                    ?
                    <div className={styles.userPerson + " " + styles.coordinadora}>
                        <img className={styles.personImg} src={props.imagen} alt="User" />
                        <h3>{props.nombre} {props.apellido}</h3>
                        <p>{props.role}</p>
                        <p className={styles.centro}>Centro Pescar Santander</p>
                    </div>
                    :
                    <div className={styles.userPerson}>
                        <img className={styles.personImg} src={props.imagen} alt="User" />
                        <h3>{props.nombre} {props.apellido}</h3>
                        <p>{props.role}</p>
                        <p className={styles.centro}>Centro Pescar Santander</p>
                    </div>
            }
        </>
    )
}