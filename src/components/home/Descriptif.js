import React from 'react'

const Descriptif = (props)=>{

    return(
        <div>
            <h2>{props.titre}</h2>
            <p>{props.explication}</p>
        </div>
    )
}

export default Descriptif