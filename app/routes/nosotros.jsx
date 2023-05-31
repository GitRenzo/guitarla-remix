import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return [
    {
      title: 'Guitar LA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de musica '
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros ">
      <h2 className="heading">Nosotros </h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros " />
        <div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros