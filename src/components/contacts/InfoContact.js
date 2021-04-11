import React from 'react'


const InfoContact = (props) => {


    return (
        <div className='info'>
            <div className='bgImg'>
                <div>{props.img}</div>
            </div>
            <h2>{props.contact}</h2>
            <p>{props.info}</p>
            <p>{props.info2}</p>
        </div>
    )
}

export default InfoContact