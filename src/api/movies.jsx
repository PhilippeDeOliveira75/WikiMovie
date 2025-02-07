import axios from 'axios'

export default async function handler(req, res) {

    try {
        const API_KEY = process.env.TMDB_API_KEY
        const BASE_URL = 'https://api.themoviedb.org/3/movie/popular'
    
        const response = await axios.get(BASE_URL, {
            params: { api_key: API_KEY, language: 'fr-FR' }
        })

        res.status(200).json(response.data)
    } 
  
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des films' })
    }

}