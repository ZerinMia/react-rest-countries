import React from 'react';
import './Country.css'
const Country = (props) => {

    const { name, area, region, flags } = props.country
    return (
        <div className="country bg-success">
            <div>
                <img src={flags.png} alt="" />
            </div>
            <div>
                <h2>Name:{name.common} </h2>
                <p>Area: {area}</p>
                <p>Region: {region}</p>
            </div>
        </div>
    );
};

export default Country;