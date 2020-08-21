import { API } from '../config';

export const getWeather = () => {

    return fetch(`${API}?q=bogota&appid=64fbd679c3c26ae7f2fd98b7f0cc9507`)
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });;
}

export const getCityWeather = city => {

    return fetch(`${API}?q=${city}&appid=64fbd679c3c26ae7f2fd98b7f0cc9507`)
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });;
}