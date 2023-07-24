import styles from './Login.module.css'
import logo from '../../assets/LogoFundacionPescar.png'

const Login = () => {
  const formHandler = (event) =>{
    event.preventDefault()
    const email = event.target.user.value
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
    if (email !== "" && !regexEmail.test(email)) {
      return;
    }
  }
  return (
    <form onSubmit = {formHandler}>
      <img src={logo} alt="Logo Fundación Pescar" />
      <p className='mt-3'>Recuerda que tu usuario es el e-mail con el que te registraste en fundación pescar.</p>
      <label className='mt-1' htmlFor="">Usuario</label>
      <input className='mt-1'  type="text" name='user' />
      <label className='mt-3' htmlFor="">Contraseña</label>
      <input className='mt-1' type="password" name='password' />
      <div className='bottom-inputs mt-3 mb-3'>
        <div>
        <input type="checkbox" />
        <span>Recordar usuario</span>
        </div>
        <div>
        <span class="underlined">¿Olvidaste tu contraseña?</span>
        </div>
      </div>
    <button className={styles.button}  type="submit">Ingresar</button>
    </form>
  )
}

export default Login