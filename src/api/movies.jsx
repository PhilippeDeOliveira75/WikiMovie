import axios from 'axios';

export default async function handler(req, res) {
    
  try {
    const API_KEY = process.env.TMDB_API_KEY; // La clé API est cachée côté serveur
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

    const { data } = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur API Proxy:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des films' });
  }
}
