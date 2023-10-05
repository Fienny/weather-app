import React, {useEffect, useState} from 'react';
import './App.css';
import {getDataJSON, getDayName, getPredictedWeatherJSON} from "./scripts/loadInfo.js";
import WeatherError from "./components/WeatherError.jsx";
import Weather from "./components/Weather.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import PredictedWeather from "./components/PredictedWeather.jsx";

function App() {
    // STATES
    const [city, setCity] = useState('');
    const [showData, setShowData] = useState(false);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [prediction, setPrediction] = useState([{}]);
    const [changeBg, setChangeBg] = useState('');

    function handleSetCity(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        if(event.key === 'Enter'){
            setIsLoading(true);
            getDataJSON(city)
                .then(result => {
                    setData(result);
                    setChangeBg(result.weather[0].description) // bug, fix this
                })
            getPredictedWeatherJSON(city).then(
                result => {
                    setPrediction(result);
                }
            )
                .then(
                    () => {
                        setIsLoading(false)
                        setShowData(true)
                    }
                )
        }
    }

    if (isLoading) {
        return (
            <LoadingScreen></LoadingScreen>
        )
    }

    if ( showData ) {
        if ('errorCode' in data || 'errorCode' in prediction) {
            return (
                <>
                    <div className="input">
                        <div className="form__group">
                            <input type="text" className="form__input" id="name" placeholder="City" required="" value={city} onChange={handleSetCity} onKeyDown={handleSubmit} />
                            <label htmlFor="name" className="form__label">City</label>
                        </div>
                    </div>
                    <WeatherError data={data} setShowData={setShowData}></WeatherError>
                </>
            )
        }
        return (
            <>
                <div className="input">
                    <div className="form__group">
                        <input type="text" className="form__input" id="name" placeholder="City" required="" value={city} onChange={handleSetCity} onKeyDown={handleSubmit} />
                        <label htmlFor="name" className="form__label">City</label>
                    </div>
                </div>
                <Weather data={data} setShowData={setShowData} changeBg={changeBg}></Weather>
                <div className="predictions">
                    {
                        prediction.map(
                            (pr) => { // it gave me cancer in game
                                return (
                                    <PredictedWeather
                                        key = {pr.id}
                                        day_name={getDayName(pr.dt_txt)}
                                        icon={pr.weather[0].icon}
                                        temp={pr.main.temp}>
                                    </PredictedWeather>
                                )
                            }
                        )
                    }
                </div>
            </>
        )
    }


    return (
        <div className="input main">
            <div className="form__group">
                <input type="text" className="form__input" id="name" placeholder="City" required="" value={city} onChange={handleSetCity} onKeyDown={handleSubmit} />
                <label htmlFor="name" className="form__label">City</label>
            </div>
        </div>
    )
}

export default App

