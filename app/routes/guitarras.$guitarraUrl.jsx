import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '../model/guitars.server';
import styles from '../styles/guitarras.css'

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles,
             
             
        }
    ]
}

export async function loader({ request, params }) {
    const { guitarraUrl } = params
    // console.log(guitarraUrl);
    const guitarra = await getGuitarra(guitarraUrl)
    // console.log(guitarra.data[0].attributes.nombre);
    return guitarra
}

function Guitarra() {
    const guitarra = useLoaderData()
    const { nombre, descripcion, image, precio } = guitarra.data[0].attributes
    return (
        <main className='contenedor guitarra '>
            <img className='imagen' src={image.data.attributes.url} alt='guitarra imagen' />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </main>
    )
}

export default Guitarra