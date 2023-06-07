import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '../model/guitars.server';
import styles from '../styles/guitarras.css'

export async function loader({ request, params }) {
    console.log(params);
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    // Si el length es 0 tira un error, si no fuese por esto no hubiera error aqui
    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Error'
        })
    }

    return guitarra
}

export function meta({ data }) {
    return [
        {
            title: `GuitarLA -  ${data.data[0].attributes.nombre}`,
            description: `Guitarras, venta de guitarras, ${data.data[0].attributes.nombre}`
        }
    ]

}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
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