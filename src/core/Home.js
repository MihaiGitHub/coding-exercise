import React, { Fragment, useState, useEffect } from 'react';
import { getWeather, getCityWeather } from './apiCore';

const Home = () => {
    const [ weather, setWeather ] = useState({
        city: '',
        temp: '',
        wind: '',
        description: ''
    });

    const { city, temp, wind, description } = weather;

    const init = () => {
        getWeather().then(response => {
            const city = response.name;
            const temp = response.main.temp;
            const wind = response.wind.speed;
            const description = response.weather[0].description;

            setWeather({ ...weather, city, temp, wind, description });
        });
    }

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        setWeather({ ...weather, [name]: event.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        getCityWeather(city).then(response => {
            const city = response.name;
            const temp = response.main.temp;
            const wind = response.wind.speed;
            const description = response.weather[0].description;

            setWeather({ ...weather, city, temp, wind, description });
        });
    }

    const form = () => (
        <form>
            <input onChange={handleChange('city')} type="text" name="city" value={city} placeholder="City" className="form-control" />
            <button onClick={handleSubmit} type="button" className="btn btn-primary">Search</button>
        </form>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Search City </h2>
                    {form()}
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <b>City:</b> {city}
                </div>
                <div className="col-sm">
                    <b>Description:</b>: {description}
                </div>
                <div className="col-sm">
                    <b>Temperature:</b>: {temp}
                </div>
                <div className="col-sm">
                    <b>Wind:</b> {wind}
                </div>
            </div>
        </div>
    );
};

export default Home;