import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get('/api/movies'); // Appelle le Proxy
    return data.results;
  } catch (error) {
    console.error('Erreur API Proxy:', error);
    return [];
  }
};
