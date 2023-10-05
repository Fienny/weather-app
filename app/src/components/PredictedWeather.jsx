import React from 'react';

function PredictedWeather({ day_name, temp, icon }) {
    return (
        <div className={"prediction"}>
            {day_name}
            <img src={"https://openweathermap.org/img/wn/" + icon + '.png'} alt="weather img"/>
            {Math.round(temp - 273)} °C
        </div>
    );
}

export default PredictedWeather;