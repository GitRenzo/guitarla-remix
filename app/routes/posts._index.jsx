import ListadoPosts from "../components/llistado-posts"
import { getPosts } from "../model/posts.server"
import { useLoaderData } from "@remix-run/react"

export function meta({ data }) {
    return [{
        title: 'GuitarLA - Blog',
        description: 'GuitarLA, venta de guitarras'
    }]
}

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

function Blog() {
    const posts = useLoaderData()
    return (
        <ListadoPosts
            posts={posts}
        />
    )
}

export default Blog