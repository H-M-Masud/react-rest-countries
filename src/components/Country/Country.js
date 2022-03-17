import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, region, flags} = props.country;

    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt=""/>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;