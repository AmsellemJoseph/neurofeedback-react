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
import Valerie from '../../assets/Wellness/Valerie.jpg'
import Dina from '../../assets/Wellness/Dina.jpg'
import Levana from '../../assets/Wellness/Levana.jpg'


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
            adresse:'Kfar yona/Natanya-Dom',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0586908752',
            description1:`Comme pour beaucoup de famille notre alyah, il y a 5 ans, a été un peu difficile pour la famille; mais particulièrement pour mon fils de 11 ans.
            Lui qui avait surmonté  ses difficultés d'apprentissage en France, ne supportait pas ce changement, trop radical, et avait beaucoup de mal à s'intégrer.`,
            description2:`Il avait perdu sa joie de vivre, était de plus en plus bagarreur, on sentait réellement et son mal être, et nous culpabilisions beaucoup de l'avoir entraîné dans cette situation. 
            Bien que notre alyah avait été bien préparée, il semblait que ce n'était pas suffisant.
            En France, grâce à l'aide de spécialistes, en psychologie, psychomotricité et orthophonie, il avait énormément progressé, mais on sentait une rechute à cause de ses difficultés d'intégration. En plus, il ne voulait pas se sentir davantage différent que ce qu'il était déjà en tant que français, en courant les spécialistes à droite et à gauche. Ça aurait augmenté ses difficultés.  `,
            description3:`J'ai donc cherché quelque chose qui l'aiderait sans effort particulier. 
            Après de longues recherches, je finis par découvrir le dynamical neurofeedback®️ qui correspondait à toutes mes attentes et dont je découvrais les résultats des plus surprenants. 
            `,
            description4:`J'ai toujours su que les épreuves qu'on reçoit ont un but en soit, et que si Hashem me donnait la mission d'aider mon fils, je pouvais le faire et ça aurai un sens.
            Et j'en ai eu la preuve.
            Au fur et à mesure des entraînements neuroptimal®️; je voyais mon fils retrouver sa motivation; il chantait, et même en hébreu. Et plus mon fils retrouvait sa joie de vivre plus la famille retrouvait son équilibre. `,
            description5:`C'est ainsi que j'ai compris que cette étape de ma vie était la pour me faire découvrir cette méthode et à mon tour aider les enfants, les mamans, perdues dans le tourbillon de la vie, a retrouver la sérénité.
            Aujourd'hui je suis là pour vous accompagner vers une vie plus belle.`,
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
        {
            id:14,
            photo:Dina,
            nom:'Dina Azria ',
            status:'Wellness Provider',
            adresse:'Jérusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0542851397',
            description1:`J'ai découvert le Neurofeedback suite à la perte de ma fille il y a 9 ans partie suite à une crise d'épilepsie. `,
            description2:`J'ai cherché comment on peut espacer et atténuer les crises et je suis tombée sur cette méthode qui marche aux USA depuis près d'une vingtaine d'années et je me suis dit : "c'est ça que je veux faire !!".`,
            description3:`Je veux aider les gens à aller mieux à devenir la meilleure version d'eux même. 
            J'ai grâce à D... d'excellents résultats avec tous mes clients et j'encourage quiconque à venir tester la méthode pour de sentir plus en phase, plus résilient et plus heureux de vivre chaque jour comme un nouveau challenge.`,
            description4:`Facebook: dina-neurofeedback Jérusalem `,
            description5:`Insta: https://instagram.com/dina_neurofeedback?igshid=nxuvfw0klr3h
            Site https://nadineazria.wixsite.com/neurofeedback`,
        },
        {
            id:15,
            photo:Valerie,
            nom:'Valerie Cohen',
            status:'Wellness Provider',
            adresse:'Tel Aviv',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0537086836',
            description1:`Mon nom est Valérie Cohen, Parisienne d’origine ayant posé ses valises à Tel-Aviv depuis bientôt 5 ans.`,
            description2:`Ma fille est âgée de 24 ans, elle a été diagnostiquée autiste à l'âge de 6 ans . Lorsque le diagnostic a été posé, tout autour de moi, affirmait que c'était irréversible, on ne guérit pas de l'autisme.

            J'ai subi les découragements et le désespoir. Mais, je n'ai pas baissé les bras, je n'ai eu de cesse de m'informer sur l'autisme, tout le temps, j'ai tout tenté et à chaque fois avec le même espoir. Mais face à l'impossible on ne peut attendre que le miracle.`,
            description3:`Dans chaque thérapie,  j'ai vu et compris qu'une petite parcelle du miracle tant attendu s'offrait à nous, à elle en particulier. Ces parcelles ont été suffisantes pour avoir envie de continuer pour elle.

            C'est à elle que  je dois d'avoir découvert le NeurOptimal® Dynamic grâce auquel elle a pu réussir son BAC avant de faire son alya.
            
             Aujourd’hui, Laura est heureuse et épanouie et a fini son service militaire dans l'armée de l'air israélienne en tant que maître chien. Elle travaille aujourd'hui en cyber après une certification dans le domaine et, avoir été déclarée par l'armée avec un " simple "  médium ADHD ( trouble de l'attention) . `,
            description4:`Cette histoire est la mienne, elle fait partie de mon parcours, mais je ne me suis pas arrêtée à Laura, des centaines de témoignages sont arrivés à moi et  attestent les résultats remarquables de NeurOptimal® Dynamic sur notre comportement, sur notre vie, nos relations, notre bien-être et notre santé.

            Mon propre père a également  réussi à se débarrasser de ses acouphènes qui ne lui laissaient pas de répit grâce à cette même thérapie. 
            
            C'est ainsi qu'au moment de faire mon alya , j'ai choisi de promouvoir cet entraînement cérébral et d'en faire mon métier. 
            
            Combien de personnes qui vivaient avec des insomnies, des maux de têtes récurrent sans origine médicale,  troubles alimentaires, toc, crises d'angoisses, crises d'anxiété, ont réussi à les  contourner grâce au NeurOptimal® Dynamic et peuvent attester d'une vie optimale.`,
            description5:`Je vous accueille tous les jours dans mon cabinet de Neuro Feedback situé au cœur de la ville blanche. À très vite !`,
        },
        {
            id:16,
            photo:Levana,
            nom:'Levanah Éden',
            status:'Wellness Provider',
            adresse:'Raanana-Dom & environs',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0503535487',
            description1:`Je suis également coach de vie.`,
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
            <Footer/>
        </div>
    )
}

export default Wellness