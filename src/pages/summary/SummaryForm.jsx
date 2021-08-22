import React, { useState } from 'react'

export default function SummaryForm(){
    const [btnStatus, setBtnStatus] = useState(true)

    const btnStateHandler=()=>{
        setBtnStatus(!btnStatus)
    }
    return(
        <div>
            <button disabled={btnStatus} >Order</button>
            <input
            id='accept-checkbox'
            type='checkbox'
            defaultChecked={false}
            onClick={btnStateHandler}
            />
            <label htmlFor='accept-checkbox'>I agree the terms and condition</label>
            
        </div>
    )
}