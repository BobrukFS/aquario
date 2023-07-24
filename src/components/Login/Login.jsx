import './Login.css'
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
      <p className='text-center mt-3'>Recuerda que tu usuario es el e-mail con el que te registraste en fundación pescar.</p>
      <label className='mt-1' htmlFor="">Usuario</label>
      <input className='mt-1'  type="text" name='user' />
      <label className='mt-3' htmlFor="">Contraseña</label>
      <input className='mt-1' type="password" name='password' />
      
        <div className="checkbox mt-3">
         <input type="checkbox" />
         <span>Recordar usuario</span>
        </div>
    <button className="mt-3" id='button'  type="submit">Ingresar</button>
      <a  href='#'>¿Olvidaste tu contraseña?</a>
    </form>
  )
}

export default Login