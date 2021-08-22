import React from 'react'

export default function ToppingOptions({name,imagePath}){

    return (
        <div>
            <img src={`http://localhost:5000/${imagePath}}`} alt={`${name} topping`}></img>
        </div>
    )
}