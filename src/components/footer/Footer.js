import React from 'react'
import Representant from '../../assets/images/representant.jpg'
import Facilitator from '../../assets/images/facilitator.png'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='containerFooter'>
                <div className='logoFooter'><img src={Representant} alt='Logo de représentant' />
                    <img src={Facilitator} alt='Logo de facilitateur' /></div>
                    <div className='adresseFooter'><p>David Remez, 13</p><p>Netanya</p></div>
                <div className='infoFooter'>
                    <a href="mailto:jennifer.amsellem@hotmail.fr">Contactez nous par mail</a>
                    <a href='https://wa.me/+972548136396' target='_blank' rel="noreferrer">Contactez nous par Whatsapp</a>
                    </div>
            </div>
        </div>
    )
}

export default Footer