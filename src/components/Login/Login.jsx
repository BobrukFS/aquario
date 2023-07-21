import './Login.css'
import logo from '../../assets/LogoFundacionPescar.png'
import axios from 'axios'

const Login = () => {





return (
    <form>
      <img src={logo} alt="Logo Fundación Pescar" />
      <p className='mt-3'>Recuerda que tu usuario es el e-mail con el que te registraste en fundación pescar..</p>
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
         <span>Olvidé mi contraseña</span>
        </div>
      </div>
      <button id='button'  type="submit">Ingresar</button>
    </form>
)
}

export default Login