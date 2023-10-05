import React from 'react';
import loading from "../assets/loading.gif";

function LoadingScreen() {
    return (
        <div className="main-table-wrapper">
            <p className={"data"}>
                Loading...
            </p>
            <img src={loading} alt="loading"/>
        </div>
    );
}

export default LoadingScreen;