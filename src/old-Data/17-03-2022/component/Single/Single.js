import React from "react";

const Single = props => {
    let { name, region } = props.country;
    return (
        <div className="singleItem">
            <h2>Name: {name.common}</h2>
            <h2>Region: {region}</h2>
        </div>
    );
};

// Second way
// const Single = props => {
//     return (
//         <div className="singleItem">
//             <h2>Name: {props.country.name.common}</h2>
//             <h2>Region: {props.country.region}</h2>
//         </div>
//     );
// };

// First way
// const Single = props => {
//     return (
//         <div className="singleItem">
//             <h2>Name: {props.name}</h2>
//             <h2>Region: {props.region}</h2>
//         </div>
//     );
// };

export default Single;
