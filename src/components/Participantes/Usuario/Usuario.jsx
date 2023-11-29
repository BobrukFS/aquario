import styles from "./Usuario.module.css";

export const Usuario = (props) => {
  return (
    <>
      <div
        className={`${styles.userPerson} mt-2  justify-content-center gap-2 row p-2 border-bottom ${styles.coordinadora} `}
      >
        <img
          className={`${styles.personImg} col-4 p-0`}
          src={props.imagen}
          alt="User"
        />
        <div className="d-flex flex-wrap gap-1 col-4 p-0 justify-content-center">
          <p>{props.nombre}</p>
          <p>{props.apellido}</p>
          <a href={props.linkedinUrl}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="col-4 p-0 text-center">{props.role}</p>
      </div>
    </>
  );
};
