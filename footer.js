




const icono_home = document.querySelector('.iconos_home')
const icono_map = document.querySelector('.iconos_generacion')
const icono_data = document.querySelector('.iconos_todos')
const icono_buscar = document.querySelector('.iconos_buscar')
const container_principal = document.querySelector('.container')

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


const typecolor = {
  Normal: '#95afc0',
  Fuego: '#f0932b',
  Agua: '#0190ff',
  Eléctrico: '#fed330',
  Planta: '#00b894',
  Hielo: '#74b9ff',
  Lucha: '#30336b',
  Veneno: '#6c5ce7',
  Tierra: '#efb549',
  Volador: '#81ecec',
  Psíquico: '#a29bfe',
  Bicho: '#26de81',
  Roca: '#2d3436',
  Fantasma: '#a55eea',
  Dragón: '#ffeaa7',
  Siniestro: '#B67F6C',
  Acero: '#000000',
  Hada: '#FF0069',
};


function translateTypes(types) {
  return types.map(type => typeTranslations[type] || type);
}



function call_data(){
  container_principal.textContent=""
  
  const header = document.createElement('header')
  const title = document.createElement('h1')
  const container_logo_datos = document.createElement('div')
  const div_logo = document.createElement('div')
  const logo = document.createElement('img')
  const div_datos = document.createElement('div')
  const div_total = document.createElement('div')
  const total_number = document.createElement('h2')
  const total_p = document.createElement('p')
  const div_generaciones = document.createElement('div')
  const total_number_generaciones = document.createElement('h2')
  const total_p_generaciones = document.createElement('p')
  const div_likes = document.createElement('div')
  const total_number_likes = document.createElement('h2')
  const total_p_likes = document.createElement('p')


  header.classList.add('header_todos')
  title.classList.add('title_todos')
  container_logo_datos.classList.add('container_datos')
  div_logo.classList.add('div_logo')
  logo.classList.add('logo')
  div_datos.classList.add('div_datos')
  div_total.classList.add('div_total')
  div_generaciones.classList.add('div_generaciones')
  div_likes.classList.add('div_likes')



  title.textContent='Pokemon'
  logo.src='./img/logo.svg'
  total_number.textContent='649'
  total_p.textContent='TOTAL'
  total_number_generaciones.textContent='5'
  total_p_generaciones.textContent='GENERACIONES'
  total_number_likes.textContent='0'
  total_p_likes.textContent='LIKES'


  container_principal.appendChild(header)

  header.appendChild(title)
  header.appendChild(container_logo_datos)

  container_logo_datos.appendChild(div_logo)
  container_logo_datos.appendChild(div_datos)

  div_logo.appendChild(logo)



  div_datos.appendChild(div_total)
  div_datos.appendChild(div_generaciones)
  div_datos.appendChild(div_likes)

  div_total.appendChild(total_number)
  div_total.appendChild(total_p)
  div_generaciones.appendChild(total_number_generaciones)
  div_generaciones.appendChild(total_p_generaciones)
  div_likes.appendChild(total_number_likes)
  div_likes.appendChild(total_p_likes)

}


function call_home(){
  container_principal.textContent=""

  const header = document.createElement('header')
  const title = document.createElement('h1')
  const div_like = document.createElement('div')
  const ico_like = document.createElement('img')
  const div_state = document.createElement('div')

  header.classList.add('header_home')
  div_like.classList.add('div_like')
  ico_like.classList.add('heart')
  div_state.classList.add('div_state')


  title.textContent = 'Pokemon'
  ico_like.src="./img/icons/heart.svg"
  


  container_principal.appendChild(header)
  container_principal.append(div_state)

  header.appendChild(title)
  header.appendChild(div_like)

  div_like.appendChild(ico_like)
  
  async function getPokemonData() {
    try {
      color = []
      for (let i = 0; i < 10; i++) {
        // Generar un número aleatorio entre 1 y 649
        const num_A = Math.floor(Math.random() * 649) + 1;
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + num_A);
        const data = await response.json();

        const pokemonTypes = translateTypes(data.types.map(type => type.type.name));

        const ruta = 'img/img_pokemon/'+ num_A +'.svg'

        const div_img = document.createElement('div')
        const img_pokemon = document.createElement('img')
        
        if (pokemonTypes[0] in typecolor){
          const a =typecolor[pokemonTypes[0] ]
          div_img.style.backgroundColor= a
        }
        
        img_pokemon.src=ruta

        div_img.appendChild(img_pokemon)
        div_state. appendChild(div_img)

    }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }
  
  getPokemonData();

  const div_container_card = document.createElement('div')
  
  div_container_card.classList.add('container_card')
  container_principal.appendChild(div_container_card)

  
  async function getPokemoncard() {
    try {
      for (let i = 0; i < 21; i++) {
        // Generar un número aleatorio entre 1 y 649
        const num_A = Math.floor(Math.random() * 649) + 1;
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + num_A);
        const data_pokemon = await response.json();
        
        const card_name = data_pokemon.name;
        const card_id = data_pokemon.id;
        const card_Types = translateTypes(data_pokemon.types.map(type => type.type.name));

        
      
        const card_ruta = 'img/img_pokemon/'+ num_A +'.svg'
        
        const div_card = document.createElement('div')
        const cont_img_icono = document.createElement('div')
        const img_icono_card = document.createElement('img')
        img_icono_card.classList.add('img_icono_card')

        img_icono_card.src = card_ruta


        div_card.classList.add('div_card')
        cont_img_icono.classList.add('cont_img_icono')

        if (card_Types[0] in typecolor){
          const a =typecolor[card_Types[0] ]
          cont_img_icono.style.backgroundColor = a
        }

        const div_datos_left = document.createElement('div')
        div_datos_left.classList.add('div_datos_left')


        div_container_card.appendChild(div_card)
        
        div_card.appendChild(cont_img_icono)
        div_card.appendChild(div_datos_left)

        cont_img_icono.appendChild(img_icono_card)

        


      }
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    }
    getPokemoncard();
  }



function call_footer(){
  const div_home = document.createElement('div')
  const ico_home = document.createElement('img')
  const home = document.createElement('a')
  
  const div_map = document.createElement('div')
  const ico_map = document.createElement('img')
  const map = document.createElement('a')
  
  const div_data = document.createElement('div')
  const ico_data = document.createElement('img')
  const data = document.createElement('a')
  
  const div_buscar = document.createElement('div')
  const ico_buscar = document.createElement('img')
  const buscar = document.createElement('a')
  
  home.href = '#'
  map.href = '#'
  data.href = '#'
  buscar.href = '#'


  div_home.addEventListener('click',call_home)
  div_data.addEventListener('click',call_data)

  
  
  div_home.classList.add('iconos')
  div_home.id='home'
  div_map.classList.add('iconos')
  div_data.classList.add('iconos')
  div_buscar.classList.add('iconos')
  
  ico_home.src='/img/Icons/home.svg'
  ico_map.src='/img/Icons/map.svg'
  ico_data.src='/img/Icons/database.svg'
  ico_buscar.src='/img/Icons/search.svg'
  
  
  ico_home.classList.add('icon')
  ico_map.classList.add('icon')
  ico_data.classList.add('icon')
  ico_buscar.classList.add('icon')
  
  
  const icon_all = document.querySelector('.icon')

  
  home.textContent='Home'
  
  
  map.textContent='Ciudad'
  
  data.textContent='Todos'
  
  buscar.textContent='Buscar'
  
  
  div_home.appendChild(ico_home)
  div_home.appendChild(home)
  
  div_map.appendChild(ico_map)
  div_map.appendChild(map)
  
  div_data.appendChild(ico_data)
  div_data.appendChild(data)
  
  div_buscar.appendChild(ico_buscar)
  div_buscar.appendChild(buscar)
  
  
  icono_home.appendChild(div_home)
  icono_map.appendChild(div_map)
  icono_data.appendChild(div_data)
  icono_buscar.appendChild(div_buscar)
}

call_footer()

call_home()
