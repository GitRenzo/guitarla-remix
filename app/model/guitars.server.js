// Cuando se le pone .server se le instruye a remix que esto solo dbe ejecutarse en el server  
export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=image`)
    const resultado = await respuesta.json()
    return resultado 
}