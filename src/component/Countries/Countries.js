import React, { useState, useEffect } from "react";
import Single from "../Single/Single";
import "./Countries.css";
const Countries = () => {
    const [country, SetCountry] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => SetCountry(data));
    }, []);
    return (
        <div>
            <h2>{country.length} Countries found.</h2>
            <div className="countryParents">
                {/* {country.map(country => Single(country))} */}
                {country.map(country => (
                    <Single
                        country={country}
                        // name={country.name.common}
                        // region={country.region}
                        key={country.cca3}
                    ></Single>
                ))}
            </div>
        </div>
    );
};

export default Countries;
