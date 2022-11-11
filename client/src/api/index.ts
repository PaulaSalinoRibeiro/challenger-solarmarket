import axios from 'axios';

export const fetchApi = async (endpoint: string) => {
  try {
    const URL_BASE = 'http://localhost:8000/'
    const { data } = await axios.get(`${URL_BASE}${endpoint}`);
    return data;
  } catch (error) {
    return null
  }
}

export const fetchCep = async (cep: string) => {
  try {
    const URL_BASE = `https://viacep.com.br/ws/${cep}/json/`
    const { data } = await axios.get(URL_BASE)
    return data;
  } catch (error) {
    return { error: 'error'}
  }
}