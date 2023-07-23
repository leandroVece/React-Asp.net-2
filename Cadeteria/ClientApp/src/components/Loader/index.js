import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="lds-ring  row justify-content-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;