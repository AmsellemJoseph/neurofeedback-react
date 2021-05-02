import React from 'react'
import Zamp from '../../assets/images/formation/replacement_zamp.jpg'
import Pc from '../../assets/images/formation/thumbnail_pro-sp7_2021.jpg'

const TextBase = () => {

    return (
        <div className='textBase'>
            <h3>Pourquoi s'équiper?</h3>
            <div className='zampContainer'>
                <div>
                    <p>Il peut y avoir plusieurs raisons pour s'équiper.</p>
                    <p>Tout d'abord parce que vous aussi vous voulez diffuser du bien-être autour de vous, mais pas que.</p>
                    <p>Vous pouvez également décider de vous équiper à titre personnel, pour votre famille et vos proches.</p>
                    <p>En effet,bien que la plupart du temps les entraînements neuroptimal ® chez votre wellness sur du court terme suffisent, parfois les entraînements sont parfois sur du long terme et peuvent s'avérer plus coûteux que de s'équiper soi même, quand on a un enfant atypique, ou une famille nombreuse.</p>
                </div>
                <div className='zamp'><img src={Zamp} alt='Zamp' /></div>
            </div>
            <div className='pcContainer'>
                <div className='pc'><img src={Pc} alt='set neuroptimal' /></div>
                <div>
                    <p>On peut également préférer avoir la machine à disposition, pour s'entraîner sans arrêt, car notre cerveau est en constante évolution et peut toujours progresser.</p>
                    <p>Les personnes travaillant déjà dans le bien-être, ou étant professionnel du médical ou paramédical, peuvent également vouloir booster leurs résultats sur leurs clients/patients.</p>

                    <p>Les raisons de s'équiper sont multiples et Jenny se fera un plaisir de vous accompagner dans votre choix.</p>

                    <p>Contactez moi au <a href='tel:+972548136396'>054-8136396</a>.</p>
                </div>
            </div>

            <h4>La formation</h4>

            <p>Jenny, votre facilitatrice, vous aidera à obtenir votre certification officielle neuroptimal ® de l'institut ZENGAR ®, la formation bien que très courte sera complète et je vous proposerai un accompagnement et un suivi qui ira bien au-delà de l'obtention de votre certification.</p>

            <p>Retrouvez les dates de formations sur le site officiel:</p>
            <a href='https://www.neuroptimal.com' target='_blank' rel="noreferrer">www.neuroptimal.com</a>
            <p>N'oubliez pas de choisir Jenny😝. (Jennifer Amsellem)</p>
            <p>A très vite.</p>
        </div>
    )
}

export default TextBase