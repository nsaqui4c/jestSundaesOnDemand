import React from 'react'
import Alert from 'react-bootstrap/Alert'


export default function AlertBanner({message, variant}){
    const alertMsg=message||'An unexpected error occured'
    const alertVar=variant||'danger'

    return(
        <div>
        <Alert variant={alertVar}>{alertMsg}</Alert>
        </div>
    )
}