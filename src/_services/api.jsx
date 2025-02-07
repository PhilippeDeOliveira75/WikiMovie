import axios from 'axios'

export const fetchMovies = async () => {

  try {
    const response = await axios.get('/api/movies')
    return response.data.results
  } 
  
  catch (error) {
    console.error('Erreur API Proxy:', error)
    return []

  }

}
