const fetchPokemon = async(baseURL, query) =>{
    try{
        const response = await fetch(`${baseURL}${query.toLowerCase()}`);
        if (!response.ok){
            throw new Error(`No se encontró; ${query}`);
        }
        const pokemonData = await response.json();
        return pokemonData;
    } catch (error){
        console.error("Error al buscar Pókemon:  ", error);
        throw error;
    }
}
export default fetchPokemon;