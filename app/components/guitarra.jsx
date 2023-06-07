
import { Link } from "@remix-run/react"
function Guitarra({ guitarra }) {

    // console.log(guitarra);
    const { descripcion, image, precio, url, nombre } = guitarra
    // console.log(image.data.attributes.formats.medium.url);
    return (
        <div className="guitarra">
            <img src={image.data.attributes.formats.medium.url} alt={`imagen ${nombre }`}/>
            <div className=" contenido">
                <h3>{nombre} </h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitarra