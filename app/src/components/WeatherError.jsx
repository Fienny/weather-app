import React from 'react';

function WeatherError({ data, setBack, setShowData }) {
    return (
        <div className={"main-table-wrapper data"}>
            <p>
                Some Error Happened
            </p>
            <p>
                Code: {data.errorCode}
            </p>
            <button className={"main-button"} onClick={
                () => {
                    setBack(false);
                    setShowData(false);
                }
            }>
                Go back
            </button>
        </div>
    );
}

export default WeatherError;