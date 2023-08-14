import styles from './Header.module.css'

const Header = () =>{
    return(
        <header>
            <button className={styles.button}  type="submit">Ingresar</button>
        </header>
    )
}

export default Header