const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonCount = 151; // Cantidad de Pokémon a cargar

const container_left = document.querySelector('.section_left')
const container_central = document.querySelector('.section_central')
const datos_pokemon = document.querySelector('.datos_pokemon')
const container_right = document.querySelector('.section_right')
// Objeto de traducciones de tipos de Pokémon de inglés a español
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


//tipo de color de fondo para los pokemon

const typecolor = {
  normal: '#95afc0',
  fire: '#f0932b',
  water: '#0190ff',
  electric: '#fed330',
  grass: '#00b894',
  ice: '#74b9ff',
  fighting: '#30336b',
  poison: '#6c5ce7',
  ground: '#efb549',
  flying: '#81ecec',
  psychic: '#a29bfe',
  bug: '#26de81',
  rock: '#2d3436',
  ghost: '#a55eea',
  dragon: '#ffeaa7',
  dark: '#B67F6C',
  steel: 'Acero',
  fairy: '#FF0069',
};

// Función para realizar una solicitud fetch a una URL
function fetchData(url) {
  return fetch(url).then(response => response.json());
}

// Función para traducir los tipos de Pokémon al español
function translateTypes(types) {
  return types.map(type => typeTranslations[type] || type);
}

// Función para cargar los datos de los Pokémon
function loadPokemonData() {
  const promises = [];

  for (let i = 1; i <= pokemonCount; i++) {
    const url = `${apiUrl}${i}`;
    promises.push(fetchData(url));
  }

  Promise.all(promises)
    .then(results => {
      const pokemonData = results.map(pokemon => {
        const pokemonId = pokemon.id;
        const pokemonName = pokemon.name;
        const pokemonTypes = translateTypes(pokemon.types.map(type => type.type.name));
        const habilidades = pokemon.abilities.map(habilidad => habilidad.ability.name);
        

        // se crea la seccion left_ con los datos cargados
        const container_section_left = document.createElement('div')
        
        container_section_left.classList.add('id_nombre_pokemon')

        const cargar_nombre_pokemon = document.createElement('h2')
        const cargar_id_pokemon = document.createElement('p')


        cargar_id_pokemon.textContent = pokemonId
        cargar_nombre_pokemon.textContent = pokemonName

        container_left.appendChild(container_section_left)
        container_section_left.appendChild(cargar_id_pokemon)
        container_section_left.appendChild(cargar_nombre_pokemon)


        // Se le da la funcion de extraer los datos al seleccionar un pokemon
        container_section_left.addEventListener('click',()=>{

          //Se limpian los datos anteriores para poder darles valores nuevos

          container_central.textContent=""
          datos_pokemon.textContent=""

          //Se crea la imagen con los datos obtenidos desde la carpeta img
          const img_pokemon = document.createElement('img')
          img_pokemon.src = './Img/img_pokemon/'+pokemonId+'.svg'
          container_central.appendChild(img_pokemon)

          const name_pokemon = document.createElement('p')
          const id_pokemon = document.createElement('p')
          const tipo_pokemon = document.createElement('p')
          const habilidades_pokemon = document.createElement('p')
          
          new_id = pokemonId.toLocaleString(undefined, { minimumIntegerDigits: 3 });
          id_pokemon.textContent =   'Id:       '+new_id
          name_pokemon.textContent = 'Nombre:   '+ pokemonName
          tipo_pokemon.textContent = pokemonTypes
          tipo_pokemon.classList.add(pokemonTypes)
          habilidades_pokemon.textContent='Habilidades: ' + habilidades



          container_right.appendChild(id_pokemon)
          container_right.appendChild(name_pokemon)
          container_right.appendChild(tipo_pokemon)
          container_right.appendChild(habilidades_pokemon)


        })

        return {
          
          id: pokemonId,
          name: pokemonName,
          types: pokemonTypes,

        };

        
      });

      // Aquí puedes trabajar con los datos de los Pokémon cargados (ID, nombre, tipo en español)
      console.log(pokemonData);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

loadPokemonData();

