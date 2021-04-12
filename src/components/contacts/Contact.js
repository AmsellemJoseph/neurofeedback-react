import React from 'react'
import Map from './Map'
import InfoContact from './InfoContact'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'

const Contact = () => {

    return (
        <div>
            <Nav />
            <div className='contactez-nous'>
                <h2>Contactez nous!</h2>
            </div>
            <div className='containerContact'>
                <div className='containerInfoContact'>
                    <InfoContact
                        img={<LocationOnIcon
                            style={{ width: '50px', height: '50px' }} />}
                        contact='ADRESSE'
                        info='David Remez 13'
                        info2='Netanya' />
                    <InfoContact
                        img={<WhatsAppIcon
                            style={{ width: '50px', height: '50px' }} />}
                        contact='WHATSAPP'
                        info={<a href='https://wa.me/+972548136396' target='_blank' rel="noreferrer">Jenny</a>}
                        info2={<a href='https://wa.me/+972523473910' target='_blank' >Joseph</a>}
                    />
                    <InfoContact
                        img={<PhoneIcon
                            style={{ width: '50px', height: '50px' }} />}
                        contact="TELEPHONE"
                        info={<a href='tel:+972548136396'>Jenny : 0548136396</a>}
                        info2={<a href='tel:+972523473910'>Joseph : 0523473910</a>} />
                    <InfoContact
                        img={<FacebookIcon
                            style={{ width: '50px', height: '50px' }} />}
                        contact='FACEBOOK'
                        info='Notre page'
                        info2={<a target='_blank' rel="noreferrer" href='https://www.facebook.com/neurofeedbacknatanya/'>Neurofeedback Natanya</a>} />
                </div>
                <div className='containerInfoMap'>
                    <Map />
                </div>
            </div>
            <div className='vide'></div>
            <Footer />
        </div>
    )
}

export default Contact