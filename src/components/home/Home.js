import React, { useState } from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Popup from './Popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Descriptif from './Descriptif'
import { Link } from 'react-router-dom'
import Ecrivez from '../material-ui/Ecrivez-nous'

const Home = () => {


    const [description] = useState([
        {
            className: 'containerDescriptifGauche',
            font: 'leaf',
            titre: 'La méthode',
            explication: 'Découvrez en quoi consiste cette méthode entièrement naturelle.',
            link:'/methode',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'users',
            titre: 'Vos Wellness Providers',
            explication: 'Trouvez le wellness provider le plus proche de chez vous.',
            link:'/wellness',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'newspaper',
            titre: 'Retrouvez nous dans la presse',
            explication: 'Voici differents articles que nous avons fait à propos de la méthode.',
            link:'/news',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'video',
            titre: 'Nos vidéos',
            explication: 'Une séléction de nos interviews et autres explications.',
            link:'/video',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'chalkboard-teacher',
            titre: "S'équiper et se former",
            explication: "Ne ratez pas les prochaines formations afin de vous lancer dans l'aventure",
            link:'/formation',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'rss',
            titre: 'Blog',
            explication: "Restez informé sur l'actualité à travers de nombreux posts.",
            link:'/blog',
        },
        // {
        //     className: 'containerDescriptifGauche',
        //     font: 'heart',
        //     titre: "Témoignages",
        //     explication: "Vos expériences comptent beaucoup pour nous. Faites en nous part.",
        //     link:'/temoignages',
        // },
        {
            className: 'containerDescriptifGauche',
            font: 'address-book',
            titre: 'Galerie',
            explication: "Prenez contact avec nous pour plus d'informations ou pour prendre rendez-vous.",
            link:'/galerie',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'address-book',
            titre: 'Contact',
            explication: "Prenez contact avec nous pour plus d'informations ou pour prendre rendez-vous.",
            link:'/contact',
        },
        
    ])
    return (
        <div className='mainHome'>
            <Nav />
            <div className='DescriptifMainContainer'>
                <div className='DescriptifMainContainerGD'>
                    {description.map((description, i) => {
                        return (
                            <Link className={description.className} key={i} to={description.link} style={{textDecoration:'none'}}>
                            <Descriptif titre={description.titre}
                            //  explication={description.explication}
                              />
                            {/* <FontAwesomeIcon icon={['fas', description.font]} style={{fontSize:'20px',margin:'20px',color:'#061359'}} /> */}
                            </Link>
                        )
                    })}
                </div>
            </div>
            
            {/* <Popup /> */}
            <Footer />
            <Ecrivez/>
        </div>
    )
}


export default Home