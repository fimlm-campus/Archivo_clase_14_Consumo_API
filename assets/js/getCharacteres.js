//URL(URI) Base para el comsumo de la API
const URL = `https://rickandmortyapi.com/api/character`

//Función que obtine todos los personajes de la API
const getAllAvatars = async(url)=>{
    try {
        //Resolver la promesa del cliente HTTP Axios asignadole el valor a res (response)
        const res = await axios.get(url)
        const data =  res.data
        //Devuelvo la data obtenida de la petición
        return data
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllAvatars,
    URL
}