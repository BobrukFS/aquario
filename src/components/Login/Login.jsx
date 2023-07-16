import './Login.css'
import logo from '../../assets/LogoFundacionPescar.png'

const Login = () => {
return (
    <form>
        <div className="row">
      <img src={logo} alt="Logo Fundación Pescar" />
      <p>Recuerda que tu usuario es el e-mail con el que te registraste en fundación pescar..</p>
      <label htmlFor="">Usuario</label>
      <input type="text" />
      <label htmlFor="">Contraseña</label>
      <input type="password" />
      <div>
        <input type="checkbox" />
        <span>Recordar usuario</span>
        <p>Olvidé mi contraseña</p>
      </div>
      <button type="submit">Ingresar</button>
      </div>
    </form>
)
}

export default Login