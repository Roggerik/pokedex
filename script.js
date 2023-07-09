///SE DECLARAN LAS VARIABLES
const hamburguer = document.querySelector('.hamburguer')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const navbar = document.querySelector('.navbar')
const button_click = document.querySelectorAll('.list__button--click')
const container = document.querySelector('.container')
const submenu = document.querySelectorAll('.submenu')
const modal = document.querySelector('.modal')
const click_icono = document.querySelectorAll('.icono_pokemon')
const container_principal = document.querySelector('.container_principal')

///PONEMOS LOS VALORES DE TIPO EN ESPAÑOL
const typeTranslations = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Eléctrico',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragón',
  dark: 'Siniestro',
  steel: 'Acero',
  fairy: 'Hada',
};

/// CAMBIAMOS EL TIPO DE INGLES A ESPAÑOL
function translateTypes(types) {
  return types.map(type => typeTranslations[type] || type);
}

///LE DAMOS FUNCIONALIDAD AL MENU HAMBURGUESA
function activarMenu(){
  line1.classList.toggle('active_line1')
  line2.classList.toggle('active_line2')
  line3.classList.toggle('active_line3')
  navbar.classList.toggle('active_list_navbar')
  
}

hamburguer.addEventListener('click',activarMenu)

///LE DAMOS FUNCIONALIDAD AL SUBMENU
button_click.forEach(element=>{
  element.addEventListener('click',()=>{
    element.classList.toggle('list_item--activate')
  })
  
})

function obtenerDatosPokemon(a=1, fin=50) {
  for (let i=a; i <= fin; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        // Llamar a la función para utilizar los datos del Pokémon
        
        utilizarDatosPokemon(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}

function utilizarDatosPokemon(datos) {
  const container_card = document.createElement('div')

  container_card.classList.add('container_card')

  container_card.innerHTML=`
  
  <img src= ${datos.sprites.front_default} class="icono_pokemon"onclick="callmodal(${datos.id})">
  
  `
  
  container.appendChild(container_card)

}



submenu.forEach(element=>{
  element.addEventListener('click',()=>{
    console.log(element.textContent)

    if(element.textContent =='Kanto'){
      console.log('es igual a Kanto')

      container.textContent=""
      obtenerDatosPokemon(1,152)
    }
    if(element.textContent =='Johto'){

      container.textContent=""
        console.log('es igual a Johto')
        obtenerDatosPokemon(152,252)
    }
    if(element.textContent =='Hoenn'){
    
      container.textContent=""
          console.log('es igual a Hoenn')
          obtenerDatosPokemon(252,387)
    }
    if(element.textContent =='Sinnoh'){
      
      container.textContent=""
      console.log('es igual a Sinnoh')
      obtenerDatosPokemon(387,494)
    }
    if(element.textContent =='Teselia'){
      
      container.textContent=""
      console.log('es igual a Teselia')
      obtenerDatosPokemon(494,650)
    }
  })
})


function inicio(){
  container.textContent=""
  obtenerDatosPokemon()
}

inicio()

function callmodal(idem){
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${idem}`)
      .then(response => response.json())
      .then(data => {
        // Llamar a la función para utilizar los datos del Pokémon

        const div_container_modal = document.createElement('div')
        div_container_modal.textContent=""
        div_container_modal.style.display='block'

        div_container_modal.classList.add('container_modal')

        const new_id = data.id.toLocaleString(undefined, { minimumIntegerDigits: 3 });
        const img_modal = data.sprites.other.home.front_default
        let tipos = data.types.map((type)=> `<p class = "tipo ${type.type.name}">${type.type.name}</p>`)
        tipos = tipos.join('');
        div_container_modal.innerHTML=`
        <div class='container_img'>
          <img class='cerrar_modal' src="Img/Icons/x-circle.svg" onclick="close_modal()">
        
          <h2 class ='id_modal'>${new_id}</h2>
          <div class='cont_img_modal'>
            <img class ='img_modal' src = "${data.sprites.other.home.front_default}">
          </div>
          <div class="pokemon_tipos">
            ${tipos}

          </div>
          <h1 class = "name_pokemon">${data.name}</h1>  
        </div>
        
        
        
        
        
        `
        container_principal.appendChild(div_container_modal)
      console.log(data.id,data.name)
      })


}

function close_modal(){
  const c_modal = document.querySelector('.container_modal')
  c_modal.remove()
}
