import './ComponenteEjemplo.css'

const ComponenteEjemplo = () => {

const hola = 'Hola';
const container = 'container'

    return ( 
        
        <div>
            <h1>Hola Mundo</h1>
            <div className={container}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto beatae accusamus, maiores natus voluptatem blanditiis dolore excepturi voluptas optio! In voluptate commodi quidem aliquid, nemo repudiandae rem voluptatem distinctio atque!</p>
                <p>{hola}</p>
            </div>
        </div>
    )
}

export default ComponenteEjemplo