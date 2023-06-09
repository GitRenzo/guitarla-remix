import { useLoaderData } from "@remix-run/react";
import { getPost } from "../model/posts.server";

import { formatearFecha } from "../utils/helper";

export async function loader({ request, params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Page not found'
        })
    }
    return post
}

export function meta({ data }) {
    return [{
        title: 'GuitarLA - Blog',
        description: 'GuitarLA, venta de guitarras'
    }]
}


function Post() {
    const post = useLoaderData()
    const { titulo, contenido, publishedAt, imagen } = post.data[0].attributes

    return (
        <article   className="post mt-3">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen post ${titulo}`} />
            <div className='contenido'>
                <h3>{titulo} </h3> 
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>{contenido}</p>
             </div> 
        </article>
    )

}

export default Post