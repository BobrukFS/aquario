import './Carrusel.css'
import profilePicture from '../../assets/profilePicture.png'

const Carrusel = () =>{
    return(
        <div className='carrusel'>
            
            <div id='flechas'>
                <div className='upper flecha'></div>
                <div className='bottom flecha'></div>
            </div>

            <div className="container">
                <div className="card" id='upperCard'>
                    <div className='datos'>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className="title">Juan</h3>
                    </div>
                    <div className="bar">
                        <div className="emptybar" />
                        <div className="filledbar" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Alias repudiandae quaerat ipsa voluptas laborum nostrum quos iure aliquam laudantium voluptatem saepe fugiat sequi earum a, blanditiis temporibus commodi?</p>
                    </div>
                </div>

                <div className="card" id='middleCard'>
                    <div className='datos'>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className="title">Pedro</h3>
                    </div>
                    <div className="bar">
                        <div className="emptybar" />
                        <div className="filledbar" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Alias repudiandae quaerat ipsa voluptas laborum nostrum quos iure aliquam laudantium voluptatem saepe fugiat sequi earum a, blanditiis temporibus commodi?</p>
                    </div>
                </div>
     
                <div className="card" id='bottomCard'>
                    <div className='datos'>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className="title">Juan</h3>
                    </div>
                    <div className="bar">
                        <div className="emptybar" />
                        <div className="filledbar" />
                    </div>
                </div> 
                
                </div>

        </div>
    )
}

export default Carrusel