import React from 'react';

function WeatherError({ data }) {
    return (
        <div className={"main-table-wrapper data"}>
            <p>
                Some Error Happened
            </p>
            <p>
                Code: {data.errorCode}
            </p>
        </div>
    );
}

export default WeatherError;