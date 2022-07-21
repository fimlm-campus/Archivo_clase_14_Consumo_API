//Llamar al elemento del DOM donde se listaran los personajes
const infoAvatar = document.querySelector('.card-info')

//Función que recibe como parametro las caracteristicas de los personajes
const listInfo = (name, species,gender, image, status)=>{
    //Listar los personajes en el DOM por cada uno que me arroje la petición HTTP
    infoAvatar.innerHTML += 
    `
    <div class="card-body">
    <img 
    src="${image}"
    alt="${name}"
    id="imageAvatar"
    >
    <h3 class="card-title">${name}</h3>
    <span class="card-tex">${species} - ${gender}</span>
    <span class="card-tex">${status}</span>
    </div>
    `
}

export default listInfo;