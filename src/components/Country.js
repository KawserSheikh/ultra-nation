import React from 'react';

const Country = (props) => {
    const { name, alpha2Code, alpha3Code, capital, region, subregion, population, timezones, currency, numericCode, languages, flag, } = props.country;
    const flagStyle = {width:'50px'};
    const countryStyle = {border: '1px solid red', marginBottom: '5px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>


        </div>
    );
};

export default Country;