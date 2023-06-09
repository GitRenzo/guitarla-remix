import { useLoaderData } from "@remix-run/react"

import ListadoGuitarras from "../components/listado-guitarras"
import ListadoPosts from "../components/llistado-posts"
import Curso from "../components/curso"

import { getGuitarras } from "../model/guitars.server"
import { getPosts } from "../model/posts.server"
import { getCurso } from "../model/curso.server"

import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from '../styles/blog.css'
import stylesCurso from '../styles/curso.css'

export function meta() {

}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts,
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}


export async function loader() {

  // Se usa promises porque no es necesario que primero se obtenga guitarras y luego posts, ambos deben ser obtenidos en simultaneo para mejorar el performance 

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  }

}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  // console.log(guitarras);
  // console.log(posts);
  // console.log(curso);
  return (
    <>
      <main className="contenedor ">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso
        curso={curso.attributes} />
      <section className="contenedor ">
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
}

export default Index