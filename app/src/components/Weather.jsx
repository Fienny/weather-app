import React from 'react';

function Weather({ data, setShowData, setBack, changeBg }) {
    if (changeBg) {
        let arr = changeBg.toLowerCase().split(' ');
        if (arr.length < 2) {
            return (
                <div className={"main-table-wrapper data" + ' ' + arr[0]}>
                    <div className="table">
                        <div>
                            <h3>
                                Today
                            </h3>
                            <h2>
                                {data.name}
                            </h2>
                            <p className={"icon_p"}>
                                <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png'} alt="weather img"/>
                                {data.weather[0].description}
                            </p>
                            <p>
                                Temperature: {
                                Math.round(data.main.temp - 273)
                            }
                            </p>
                        </div>
                        <button className={"main-button"} onClick={
                            () => {
                                setBack(false);
                                setShowData(false);
                            }
                        }>
                            Go back
                        </button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={"main-table-wrapper data" + ' ' + arr[0] + '_' + arr[1]}>
                    <div className="table">
                        <div>
                            <h3>
                                Today
                            </h3>
                            <h2>
                                {data.name}
                            </h2>
                            <p className={"icon_p"}>
                                <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png'} alt="weather img"/>
                                {data.weather[0].description}
                            </p>
                            <p>
                                Temperature: {
                                Math.round(data.main.temp - 273)
                            }
                            </p>
                        </div>
                        <button className={"main-button"} onClick={
                            () => {
                                setBack(false);
                                setShowData(false);
                            }
                        }>
                            Go back
                        </button>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className={"main-table-wrapper data"}>
            <div className="table">
                <div>
                    <h3>
                        Today
                    </h3>
                    <h2>
                        {data.name}
                    </h2>
                    <p className={"icon_p"}>
                        <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png'} alt="weather img"/>
                        {data.weather[0].description}
                    </p>
                    <p>
                        Temperature: {
                        Math.round(data.main.temp - 273)
                    }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Weather;