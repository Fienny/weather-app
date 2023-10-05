// function that loads JSON from WEATHER API
import PredictedWeather from "../components/PredictedWeather.jsx";
import React from "react";

export async function getDataJSON(city) {
    const api_key = 'eaf312c470ed6b3a6560ebb416cd220c';
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ api_key;
    let response = await fetch(link);
    if (response.status === 404) {
        return {
            'errorCode': '404',
        }
    }
    if (response.ok) {
        return await response.json();
    } else {
        return {
            'errorCode': '' + response.status,
        };
    }
}

export async function getPredictedWeatherJSON(city) {
    const api_key = 'eaf312c470ed6b3a6560ebb416cd220c';
    let link = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid='+ api_key;
    let response = await fetch(link);
    if (response.status === 404) {
        return [
            {
                'errorCode': '404',
            }
        ]
    }
    if (response.ok) {
        let res = [];
        let resp = await response.json()

        for(let i = 1; i < resp.list.length;  i = i + 8){
            res.push(resp.list[i]);
        }
        return res;
    } else {
        return [
            {
                'errorCode': '' + response.status,
            }
        ]
    }
}

export function getDayName(date_str) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    let newDate = new Date(date_str);
    return days[newDate.getDay()];
}

// predictions

// {
//     prediction.map(
//         (pr, index) => {
//             return (
//                 <PredictedWeather
//                     day_name={getDayName(pr[index].dt_txt)}
//                     icon={pr[index].weather[0].icon}
//                     temp={pr[0].main.temp}>
//                 </PredictedWeather>
//             )
//         }
//     )
// }