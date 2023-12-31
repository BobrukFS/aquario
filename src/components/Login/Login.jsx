import styles from "./Login.module.css";
import logo from "../../assets/LogoFundacionPescar.png";
import { useAuth } from "../../provider/authProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utilities/constants";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();

    const username = event.target.user.value;
    const password = event.target.password.value;

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (username !== "" && !regexEmail.test(username)) {
      return;
    }

    axios({
      method: "post",
      url: `${API_URL}api/Auth/Login`,
      data: {
        username,
        password,
      },
    }).then((resp) => {
      setToken(resp.data.jwtToken);
      navigate("/foro", { replace: true });
    });
  };
  return (
    <form onSubmit={formHandler}>
      <img src={logo} alt="Logo Fundación Pescar" />
      <p className="text-center mt-3">
        Recuerda que tu usuario es el e-mail con el que te registraste en
        fundación pescar.
      </p>
      <label className="mt-1" htmlFor="">
        Usuario
      </label>
      <input className="mt-1" type="text" name="user" />
      <label className="mt-3" htmlFor="">
        Contraseña
      </label>
      <input className="mt-1" type="password" name="password" />

      <div className="checkbox mt-3">
        <input type="checkbox" />
        <span>Recordar usuario</span>
      </div>
      <button className={`${styles.button} mt-3`} id="button" type="submit">
        Ingresar
      </button>
      <a href="#">¿Olvidaste tu contraseña?</a>
    </form>
  );
};

export default Login;
