import axios from 'axios';

const API_KEY = 'fca_live_QqssunnyxYodBhW2WIEalzTAh7AxKBSQCWf6J55M';
const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';

const fetchCurrencyData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { 'apikey': API_KEY }
    });

    return response.data.data; // ou qualquer outra lógica de processamento que você deseja
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return null;
  }
};

export default fetchCurrencyData;
