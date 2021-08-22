import React from 'react'

export default function ScoopOptions({name,imagePath}){
    return (
        <div>
            <img src={`http://localhost/5000/${imagePath}`} alt={`${name} scoop`}/>

        </div>
    )
}