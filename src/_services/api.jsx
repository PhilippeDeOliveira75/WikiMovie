import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = async (category = 'popular') => {

  try {
    const response = await axios.get(`${BASE_URL}/movie/${category}`, {
      params: { api_key: API_KEY, language: 'fr-FR' }
    })
    return response.data.results
  } 
  
  catch (error) {
    console.error('Erreur lors de la récupération des films:', error)
    return []
  }
  
}
