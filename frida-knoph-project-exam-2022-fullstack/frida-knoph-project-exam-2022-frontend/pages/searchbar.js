import React from 'react'
import { API_URL } from '../utils/urls';



export default async function HandleSearch() {

        const product_res = await fetch(`${API_URL}/api/hotels`)
        const hotels = await product_res.json()
    
    
    console.log(hotels)

    return (
        <div className="search">
            <div className="searchInputs">
            <input placeholder="" />
            <div className="data__result"></div>
        </div>
        <div className="dataResult">
        {hotels.data.map(hotel => (
                <div><a href={`details/${hotel.attributes.slug}`}>
                        {hotel.attributes.name}</a>
            </div>
            ))}
         
        </div>
        
        </div>
    );
    }
    
