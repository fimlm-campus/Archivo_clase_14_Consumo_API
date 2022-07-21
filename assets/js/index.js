import { getAllAvatars, URL } from "./getCharacteres.js";
import listInfo from "./listCharacters.js";

// Funcion anonima que se ejecuta tan pronto se visuzliza el DOM
(async ()=>{
    //Implementación de try catch para caturar error inesperados
    try {
        //Resuelve la promesa de la función getAllAvatars
        let data = await getAllAvatars(URL)
        data.results.map(item => {
            //LLamar función que lista los resultados en el DOM
            listInfo(item.name,item.species,item.gender,item.image,item.status)
        })
    }catch(error){
        console.log(error);
    }
}
)()
