import axios from 'axios';

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
});

const marvelKey = `ts=1631572374297&apikey=6b4f4a0506338bc9c00889db929533d7&hash=ce9ca3b84c5d534a03c5c7c6fbc7eff0`;

export {
    api,
    marvelKey,
};
