import axios from 'axios';

// https://sujeitoprogramador.com/r-api/?api=filmes
// https://economia.awesomeapi.com.br/json/all

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});


const apiEconomia = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
});

export default api;
export { apiEconomia };