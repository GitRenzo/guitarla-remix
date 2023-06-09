import ListadoPosts from "../components/llistado-posts"

import { getPosts } from "../model/posts.server"
import { useLoaderData } from "@remix-run/react"
import styles from "../styles/blog.css"

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default Blog