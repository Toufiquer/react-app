import React, { useState } from "react";

const Mobile = () => {
    let [num, SetNum] = useState(5);
    let increase = () => {
        if (num < 100) {
            SetNum(num + 1);
        }
    };
    let decrease = () => {
        if (num > 0) {
            SetNum(num - 1);
        }
    };
    let go02 = () => {
        SetNum((num = 2));
    };
    let go98 = () => {
        SetNum((num = 98));
    };
    return (
        <div>
            <h2>Buttery {num}</h2>
            <button onClick={go02}>Go 02</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
            <button onClick={go98}>Go 98</button>
        </div>
    );
};

export default Mobile;
