import './Carrusel.css'

const Carrusel = () =>{
    return(
            <div className="container">
                <div className="card">
                    <h3 className="title">Juan</h3>
                <div className="bar">
                    <div className="emptybar" />
                    <div className="filledbar" />
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx={60} cy={60} r={50} />
                    </svg>
                </div>
                </div>
                <div className="card">
                <h3 className="title">Pedro</h3>
                <div className="bar">
                    <div className="emptybar" />
                    <div className="filledbar" />
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx={60} cy={60} r={50} />
                    </svg>
                </div>
                </div>
                <div className="card">
                <h3 className="title">Juan</h3>
                <div className="bar">
                    <div className="emptybar" />
                    <div className="filledbar" />
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx={60} cy={60} r={50} />
                    </svg>
                </div>
                </div>
            </div>
    )
}

export default Carrusel