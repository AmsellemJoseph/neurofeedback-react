import React from 'react'


const InfoContact = (props) => {


    return (
        <div className='info'>
            <div className='bgImg'>
                <div>{props.img}</div>
            </div>
            <h2 style={{marginTop:'-0px'}}>{props.contact}</h2>
            <p style={{marginBottom:'5px'}}>{props.info}</p>
            <p>{props.info2}</p>
        </div>
    )
}

export default InfoContact