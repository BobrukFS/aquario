import styles from './Usuario.module.css'

export const Usuario = (props) => {

    return (
        <>
            {
                props.role == "coordinadora"
                    ?
                    <div className={styles.userPerson + " " + styles.coordinadora}>
                        <img className={styles.personImg} src="https://cdn.discordapp.com/attachments/1168750269383856150/1168797223509827625/avatar-de-usuario_3.png?ex=6553123d&is=65409d3d&hm=218aa407ee7888e3dd2a99991ad7953e61fd073361b293269d2cedb2bd1bcfb6&" alt="User" />
                        <h2>{props.nombre}</h2>
                        <p>({props.role})</p>
                        <p>Centro Pescar Santander</p>
                        <img className={styles.socialImg} src="https://cdn-icons-png.flaticon.com/128/61/61109.png" alt="linkedin" />
                    </div>
                    :
                    <div className={styles.userPerson}>
                        <img className={styles.personImg} src="https://cdn.discordapp.com/attachments/1168750269383856150/1168785723487428628/avatar-de-usuario_2.png?ex=65530787&is=65409287&hm=0952984a277b8935860ac454e616901e11754d01c7cda3ea9262305798bd94d1&" alt="User" />
                        <h2>{props.nombre}</h2>
                        <p>({props.role})</p>
                        <p>Centro Pescar Santander</p>
                        <img className={styles.socialImg} src="https://cdn-icons-png.flaticon.com/128/61/61109.png" alt="linkedin" />
                    </div>
            }
        </>
    )
}