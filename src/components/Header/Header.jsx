import styles from './Header.module.css'
import logo from '../../assets/LogoFundacionPescar.png'

const Header = () =>{
    return(
        <header>
            <button className={styles.button}  type="submit">Ingresar</button>
        </header>
    )
}

export default Header