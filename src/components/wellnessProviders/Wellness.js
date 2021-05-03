import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Card from './Card'

import Jenny from '../../assets/images/Jenny.jpeg'
import Joseph from '../../assets/images/Joseph.jpg'
import Nathalie from '../../assets/Wellness/nathalie.jpg'
import Hanna from '../../assets/Wellness/Hanna.jpg'
import Sabine from '../../assets/Wellness/Sabine.jpg'
import Kespi from '../../assets/Wellness/Kespi.jpg'
import Woman from '../../assets/Wellness/woman.svg'
import Man from '../../assets/Wellness/man.svg'
import Benaim from '../../assets/Wellness/Benaim.jpg'
import Berrebi from '../../assets/Wellness/Berrebi.jpg'
import Nehama from '../../assets/Wellness/Nehama.jpg'
import Simha from '../../assets/Wellness/Simha.jpg'


import Israel from '../../assets/images/20x15/il.png'

const Wellness = () => {

    const [wellnessProvider, setWellnessProvider] = useState([
        {
            id:1,
            photo:Jenny,
            nom:'Jennifer Amsellem',
            status:'Facilitatrice et représentante',
            adresse:'David Remez 13, Netanya',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'https://wa.me/+972548136396',
            telephone:'tel:+972548136396',
            telAffiche:'0548136396',
            description1:`Je me suis toujours sentie différente, sans jamais mettre de mot dessus; mais, quand mon fils a montré les mêmes signes de différences, en ajoutant la colère en plus, j'étais prête à tout pour lui éviter de ressentir les mêmes choses que moi. `,
            description2:`Alors; quand il a commencé à manifester son mal-être en explosant de colère en classe dès 5 ans, on a cherché par tous les moyens à l'aider à se calmer tout en évitant des traitements trop lourds.`,
            description3:`Je suis tombée par hasard sur une page parlant de la méthode neuroptimal® et nous avons fait des dizaines de kilomètres plusieurs fois par semaine pour tester. Je ne pouvais pas me lancer dans n'importe quoi après avoir testé plein d'autres méthodes.
            Quand j'ai vu les résultats j'ai voulu diffuser ce bien-être autour de moi et surtout le tester sur mes autres enfants et moi même.`,
            description4:`Les résultats ont été différents sur chacun mais assez extraordinaires. En même temps, quand on est maman autiste de 4 enfants dont 3 autistes et un hyper actif, la vie est extraordinaires…`,
            description5:`Je me ferai un plaisir de vous aider et vous accompagner dans vos entraînements pour obtenir le meilleur de la vie.`,
        },
        {
            id:2,
            photo:Joseph,
            nom:'Joseph Amsellem',
            status:'Wellness Provider',
            adresse:'David Remez 13, Netanya',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'https://wa.me/+972523473910',
            telephone:'tel:+972523473910',
            telAffiche:'0523473910',
            description1:`Après avoir poussé ma femme à se lancer dans l'aventure neuroptimal®, j'ai voulu à tout prix tester sur moi.`,
            description2:`Les résultats ont été pour le moins surprenants. Comme beaucoup j'avais des attentes particulières, pourtant, au bout de quelques sessions je me suis rendu compte, qu'il y avait des effets spectaculaires sur moi, mais pas du tout sur le point visé à la base, j'ai alors compris que cette méthode était aussi merveilleuse que surprenante.`,
            description3:`Quand ma femme a eu besoin que je prenne la relève quelques mois pour des raisons de santé, c'est naturellement que je me suis lancé dans l'aventure, non plus en tant que simple utilisateur de la méthode mais en tant qu'entraineur, et j'y ai tellement pris goût que je n'ai pas voulu lâcher quand elle a pu reprendre sa place.`,
            description4:`Ayant voulu aller plus loin dans l'aide et l'accompagnement, je me suis également formé en pnl et imagination guidée par la transe (technique proche de l'hypnose ericksonienne), mais on revient vite a son premier amour.`,
            description5:`Je suis donc là, à votre disposition, pour vous accompagner, surtout que j'ai l'habitude de gérer des "atypiques".`,
        },
        {
            id:3,
            photo:Nathalie,
            nom:'Nathalie Prochownik ',
            status:'Wellness Provider',
            adresse:'Hertzlia pitouah et environ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0546398865',
            description1:`J'ai toujours été attirée par le bien-être, et sa diffusion, et c'est naturellement que j'ai décidé de faire du bénévolat pour l'hôpital tel ashomer.`,
            description2:`Alors que je cherchais une méthode naturelle pour soulager la douleur du père de mes enfants, étant atteint de sclérose en plaques et souffrant du trijumeau, j'ai entendu parlé de la méthode neuroptimal®.`,
            description3:`C'est à peu près à même époque que je rencontrais, à Eilat, Emmanuelle Taïeb, z"l, qui m'expliquait le fonctionnement de cette magnifique méthode, et en discutant je découvre que, non seulement cette méthode peut aider mon ex mari à mieux gérer ses douleurs, mais également apaiser mes enfants, qui ont développés, à cause de la situation, une angoisse de la mort et de la maladie.`,
            description4:`Je comprends alors qu'il est temps de m'équiper et de continuer sur ma voie de diffusion de bien-être, en proposant des entraînements cérébraux grâce à cette merveilleuse méthode.`,
            description5:``,
        },
        {
            id:4,
            photo:Hanna,
            nom:'Hanna Davar ',
            status:'Wellness Provider',
            adresse:'Natanya et alentours',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0549134036',
            description1:`J'avais entendu parler du neurofeedback lors d'une émission sur l'autisme sur le fait qu'un enfant avait réussi à développer son langage grâce à la méthode.`,
            description2:`J'ai voulu essayer la méthode sur ma fille de 11 ans à l'époque qui ne parlait pas du tout ne dormait pas la nuit était complètement dans son monde. J'ai alors contacté Jenny qui m'a expliqué la méthode neuroptimal®, et j'ai vite pris rendez vous avec Joseph, et nous sommes vite devenus proches.`,
            description3:`Après quelques sessions j'ai remarqué que Noa a commencé à dormir la nuit et à être plus avec nous, était moins passive. `,
            description4:`J'ai donc fait faire à mon fils qui lui aussi est autiste des sessions et j'ai remarqué qu'il arrivait mieux à s'exprimer. Il avait plus de mots à son vocabulaire et savait les utiliser correctement.
            Étant donné que le besoin pour ma famille était important, j'ai décidé de me former et m'équiper. `,
            description5:`A présent je diffuse la méthode autour de moi.
            Étant d'un naturel empathique et très à l'écoute, je me ferai un plaisir de vous accompagner dans votre progression, de chez moi ou à votre domicile.`,
        },
        {
            id:5,
            photo:Sabine,
            nom:'Sabine Benitah  ',
            status:'Wellness Provider',
            adresse:'Natanya, Domicile ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0505956008',
            description1:`Après plusieurs expériences en neurofeedback dynamique plus que réussies, j'ai décidé de suivre la formation et d'apporter aide et soutien à ceux qui en avaient besoin.`,
            description2:``,
            description3:``,
            description4:``,
            description5:``,
        },
        {
            id:6,
            photo:Kespi,
            nom:'Jennifer Kespi',
            status:'Wellness Provider',
            adresse:'Kfar yona/Natanya(Domicile)',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0586908752',
            description1:`Lorsque nous avons fait notre alya, il y a 5 ans maintenant, notre fils aîné de 11 ans a l’époque avait très mal vécu ce changement de vie, alors qu'il avait fait en France un redoublement profitable et qu'il remontait ses notes et reprenait confiance en lui.
            Cette alya a été pour lui un véritable tsunami qui avait détruit sa vie.`,
            description2:`Je ne reconnaissais plus mon fils, lui qui était si joyeux, bout en train ...Il passait toutes ses journées à se plaindre, à pleurer et crier  : « je suis français »
            Il n'arrivait pas à s’intégrer ni à se faire des amis...
            Au lieu de cela, il cumulait les disputes et les bagarres.
            C’était très dur pour moi de voir mon fils si malheureux et si mal dans sa peau.
            Je culpabilisais de ce choix que nous avions imposé à nos enfants, malgré la longue préparation.`,
            description3:`Lui qui avait déjà eu un  parcours scolaire semé d'embûches, mais pour lequel je me démenais afin de lui apporter l’aide dont il avait besoin, grâce aux différents intervenants comme la psychomotricité, l’orthophoniste ou encore l’accompagnement d’une  phsychologue. Tous l’ont aidé et l’ont acompagné à leur manière mais là, je savais qu'il fallait autre chose car il en avait assez de voir toutes sortes de spécialistes pour enfant, qui lui donnaient l'impression d’être : «pas normal».`,
            description4:`J'ai donc cherché quelque chose qui puisse l’aider sans pour autant avoir besoin de faire de test ou de lui demander un effort particulier.
            Après de longues recherches, je finis par découvrir le dynamical neurofeedback® qui correspondait tout à fait à mes attentes et dont je découvrais les résultats des plus surprenants.
            J’ai toujours pensé que les épreuves de mon fils, étaient la mission qu'Hashem m’avait donnée car j'étais capable de l'aider à les surmonter .`,
            description5:`Tout au long des sessions d'entraînement neuroptimal®, je vois mon fils retrouver, au fur et à mesure, le sourire, la motivation, ses ambitions... et je le surprends à parler et même à chanter en hébreu sans faute. Quand les tensions à la maison s’atténuent pour laisser place à des rires, des joies et de la complicité, que les bêtises faitent sont assumées et que j'entends des excuses prononcées spontanément; je comprends alors que La méthode neuroptimal® a changé la vie de mon fils mais aussi celle de notre famille. Et je comprends alors que ma mission d'aider mon fils, est en faite celle d'aider tous les enfants et toutes les mamans qui sont perdus, qui n'arrivent plus à avancer sereinement et qui ont besoin d'un coup de pouce au niveau scolaire, au niveau relationnel, ou affectif...
            Ma mission: vous aider à rendre votre vie plus belle et plus sereine.
            `,
        },
        {
            id:7,
            photo:Woman,
            nom:'Adina Amram',
            status:'Wellness Provider',
            adresse:'Jérusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0542114104',
            description1:`Je me suis lancée dans l'aventure neuroptimal® à la suite dune nouvelle opération 
            Qui m'avait vraiment affaiblit et mis le moral a zéro. `,
            description2:`Une amie m'a proposee de faire des séances d'entraînement cérébral neuroptimal®. Je n'étais pas enthousiaste à tester encore une nouvelle méthode mais elle a reussi a me convaincre en me parlant des bienfaits que l'on obtenait.
            `,
            description3:`Au bout de quelques seances
            Les résultats ont été  surprenants.
             
            Mon moral est remonté et j'ai réussi à prendre du recul par rapport à ma maladie et aux résultats que je devais recevoir par le médecin.`,
            description4:`J'ai compris que cette méthode devait être connue.

            Jai décidé de la partager autour de moi et permettre aux autres de retrouver sérénité  et bien être en testant la méthode.`,
            description5:`Je suis  à votre disposition pour tester à votre tour cette méthode.
            `,
        },
        {
            id:8,
            photo:Benaim,
            nom:'Emma Bennaïm ',
            status:'Wellness Provider',
            adresse:'Shomron , Jérusalem ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0536120882',
            description1:`J'ai connu la méthode par Emmanuelle Taieb zal.`,
            description2:`J'étais à un tournant dans ma vie, je devais faire des choix et tout était confus.`,
            description3:`En faisant les séances, c'est comme si toutes les pièces du puzzle s'emboitaient les unes aux autres, tout est devenu clair et les décisions que j'ai prise par la suite étaient une évidence.
            Toutes mes peurs qui m'empêchaient d'avancer avaient disparues.`,
            description4:`Si cela m'a aidé alors autant en profiter pour aider les autres!`,
            description5:`Je suis formée en parallèle à la sophrologie, trans PNL et EFT.
            Et j'associe les exercices de respiration et visualisation guidée aux séances.`,
        },
        {
            id:9,
            photo:Berrebi,
            nom:'Myriam Berrebi',
            status:'Wellness Provider',
            adresse:'Ashkelon/Ashdod',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0548131475',
            description1:`Ma rencontre avec la méthode NEUROPTIMAL® a démarré avec mon fils à l'âge de 6 ans.
            Avec l'entrée au cp on a remarqué un manque de concentration et d'attention.`,
            description2:`Etant contre la r*****e je me suis intéressée sur plusieurs thérapies alternatives et j'ai rencontré une wellness provider qui a su prendre mon fils avec beaucoup de douceurs et quelques sessions plus tard, c'était pour moi la révélation.`,
            description3:`J'ai eu la chance de me former avec une formatrice hors pair en France qui avec beaucoup d'amour et de patience m'a formé et m'a aidé à me lancer.
            Je suis diplômée depuis juin 2018.`,
            description4:`Je me tiens à votre disposition pour vous accompagner et vous aider à vous sentir mieux `,
            description5:`N'hésitez pas à me contacter pour tous renseignements ou prise de rdv au 0548131475 .`,
        },
        {
            id:10,
            photo:Man,
            nom:'Ruben Glaser ',
            status:'Wellness Provider',
            adresse:'Jérusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0585881696',
            description1:`Etudiant en psychologie, à l’Open University de Jerusalem, et praticien Neurofeedback, je vous accompagne pour tout trouble d’anxiété, stress, insomnie, addiction…`,
            description2:`La recherche à toujours été pour moi une porte d’entrée de ce que notre monde intérieur peut nous offrir.`,
            description3:`Mon intérêt est encore plus grand lorsque l’on parle de « méthode » optimiste. En effet la méthode NeurOptimal®, est une alternative incroyable à la Ritaline, qui agresse nos enfants ici en Israel. Mais pas que, mon intérêt m’a emmené a chercher l’avis des psychologue ou autre professionnel de la santé.`,
            description4:`L’unanimité était telle que j’ai voulu essayer personnellement, et de fils en aiguilles, mes proches, mes amis, ma famille…`,
            description5:`Ce qui me donne la chance aujourd’hui de vous offrir mon savoir, mes capacités, et surtout ma passion pour les approches optimistes de la psychologie, et les méthodes d’exceptions qui nous permettent d’exploiter au maximum nos capacités afin d’être la meilleur version de soi même.
            www.israelneurofeedback.com`,
        },
        {
            id:11,
            photo:Nehama,
            nom:'Néhama Haviv',
            status:'Wellness Provider',
            adresse:'Kohav Yaakov',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0546278902',
            description1:`J'ai découvert la méthode neuroptimal ® lorsque (graphiste à la base) j'ai eu à faire le design d'un prospectus concernant cette méthode. Très vite, je me suis sentie attirée et je m'y suis intéressée davantage.`,
            description2:`De là, je me suis retrouvée à faire des séances à mes enfants et moi-même et très vite, on en a tous ressenti les bienfaits, chacun selon les besoins qu'il avait. J'ai pu véritablement voir la spécialité de cette méthode qui comble les besoins de chacun, si différents les uns des autres.`,
            description3:`J'ai décidé alors de me lancer aussi dans cette aventure et depuis j'aide et accompagne les personnes désirant également faire ces entraînements cérébrales afin d'obtenir le meilleur d'eux-mêmes!`,
            description4:`Au plaisir de me mettre à votre disposition!`,
            description5:``,
        },
        {
            id:12,
            photo:Simha,
            nom:'Alona Simha Aboujdid',
            status:'Wellness Provider',
            adresse:'Jérusalem ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0544357703',
            description1:`Je m'appelle Alona Simha Aboujdid, j'habite à Jérusalem depuis plus de 30 ans, je suis bilingue hébreu/français, je fais parti de l'équipe wellness provider Israël, et j'utilise le système neuroptimal ®, depuis quelques années avec l'aide de jenny, mon mentor.`,
            description2:`Je reçois chez moi et me déplace également à domicile.`,
            description3:`Je suis au Shouk Mahané Yéouda et prête à aider pour être dans un monde meilleur.`,
            description4:`La méthode neuroptimal® est le meilleur moyen que je connaisse.`,
            description5:`Je vous attends.`,
        },
        {
            id:13,
            photo:Woman,
            nom:'Nathalie Wygodzki ',
            status:'Wellness Provider',
            adresse:'Tel Aviv  ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0584401447',
            description1:`fitbrain50.com`,
            description2:``,
            description3:``,
            description4:``,
            description5:``,
        },
    ])


    return (
        <div className='Wellness'>
            <Nav />
            {wellnessProvider.map((wellness) => {
                return (
                    <Card
                        key={wellness.id}
                        photo={wellness.photo}
                        nom={wellness.nom}
                        status={wellness.status}
                        adresse={wellness.adresse}
                        drapeau={wellness.drapeau}
                        pays={wellness.pays}
                        whatsapp={wellness.whatsapp}
                        tel={wellness.telephone}
                        telAffiche={wellness.telAffiche}
                        description1={wellness.description1}
                        description2={wellness.description2}
                        description3={wellness.description3}
                        description4={wellness.description4}
                        description5={wellness.description5}
                    />
                )
            })}
            {/* <Footer/> */}
        </div>
    )
}

export default Wellness