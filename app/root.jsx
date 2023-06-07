import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'
export function meta() {
    const error = useRouteError()
    if(error){
        return [{
            title: 'Page not found',
            description: 'Pagina no encontrada'
        }]
    }

    return [
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true",
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap',
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

export default function app() {
    return (
        <Document>
            <Outlet />
        </Document>
    )
}

export function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}


// Manejo de errores v2 since useCatch has been deprecated
export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>Pagina no encontrada: {error.status}</p>
                <Link className='error-enlace' to='/'>Talvez quieras volver a la pagina principal</Link>
            </Document>
        )
    }
    
    let errorMessage = "Unknown error"
    return (
        <Document>
            <p className='error'>Oh oh, ocurrio un error...</p>
            <Link className='error-enlace' to='/'>Talvez quieras volver a la pagina principal</Link>
        </Document>
    )
}


// This is the V1 and everything works fine
// export function CatchBoundary() {
//     const error = useCatch()
//     return (
//         <Document>
//             <p className='error'>{error.status} {error.statusText}</p>
//         </Document>
//     )
// }

// export function ErrorBoundary({ error }) {
//     return (
//         <Document>
//             <p className='error'>{error.status} {error.statusText}</p>
//         </Document>
//     );
// }