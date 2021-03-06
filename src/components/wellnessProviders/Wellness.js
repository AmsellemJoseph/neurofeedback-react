import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Card from './Card'

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';


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
import Karen from '../../assets/Wellness/Karen.jpg'


import Israel from '../../assets/images/20x15/il.png'


const useStyles = makeStyles((theme) => ({
    Btnroot: {
        position: 'fixed',
        bottom: theme.spacing(12),
        zIndex:'100',
        right: theme.spacing(1),
    },
}));


function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.Btnroot}>
                {children}
            </div>
        </Zoom>
    );
}


const Wellness = (props) => {

    const classes = useStyles();


    const [wellnessProvider, setWellnessProvider] = useState([
        {
            id:1,
            photo:Jenny,
            nom:'Jennifer Amsellem',
            status:'Facilitatrice et repr??sentante',
            adresse:'David Remez 13, Netanya',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'https://wa.me/+972548136396',
            telephone:'tel:+972548136396',
            telAffiche:'0548136396',
            description1:`Je me suis toujours sentie diff??rente, sans jamais mettre de mot dessus; mais, quand mon fils a montr?? les m??mes signes de diff??rences, en ajoutant la col??re en plus, j'??tais pr??te ?? tout pour lui ??viter de ressentir les m??mes choses que moi.??`,
            description2:`Alors; quand il a commenc?? ?? manifester son mal-??tre en explosant de col??re en classe d??s 5 ans, on a cherch?? par tous les moyens ?? l'aider ?? se calmer tout en ??vitant des traitements trop lourds.`,
            description3:`Je suis tomb??e par hasard sur une page parlant de la m??thode neuroptimal?? et nous avons fait des dizaines de kilom??tres plusieurs fois par semaine pour tester. Je ne pouvais pas me lancer dans n'importe quoi apr??s avoir test?? plein d'autres m??thodes.
            Quand j'ai vu les r??sultats j'ai voulu diffuser ce bien-??tre autour de moi et surtout le tester sur mes autres enfants et moi m??me.`,
            description4:`Les r??sultats ont ??t?? diff??rents sur chacun mais assez extraordinaires. En m??me temps, quand on est maman autiste de 4 enfants dont 3 autistes et un hyper actif, la vie est extraordinaires???`,
            description5:`Je me ferai un plaisir de vous aider et vous accompagner dans vos entra??nements pour obtenir le meilleur de la vie.`,
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
            description1:`Apr??s avoir pouss?? ma femme ?? se lancer dans l'aventure neuroptimal??, j'ai voulu ?? tout prix tester sur moi.`,
            description2:`Les r??sultats ont ??t?? pour le moins surprenants. Comme beaucoup j'avais des attentes particuli??res, pourtant, au bout de quelques sessions je me suis rendu compte, qu'il y avait des effets spectaculaires sur moi, mais pas du tout sur le point vis?? ?? la base, j'ai alors compris que cette m??thode ??tait aussi merveilleuse que surprenante.`,
            description3:`Quand ma femme a eu besoin que je prenne la rel??ve quelques mois pour des raisons de sant??, c'est naturellement que je me suis lanc?? dans l'aventure, non plus en tant que simple utilisateur de la m??thode mais en tant qu'entraineur, et j'y ai tellement pris go??t que je n'ai pas voulu l??cher quand elle a pu reprendre sa place.`,
            description4:`Ayant voulu aller plus loin dans l'aide et l'accompagnement, je me suis ??galement form?? en pnl et imagination guid??e par la transe (technique proche de l'hypnose ericksonienne), mais on revient vite a son premier amour.`,
            description5:`Je suis donc l??, ?? votre disposition, pour vous accompagner, surtout que j'ai l'habitude de g??rer des "atypiques".`,
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
            description1:`J'ai toujours ??t?? attir??e par le bien-??tre, et sa diffusion, et c'est naturellement que j'ai d??cid?? de faire du b??n??volat pour l'h??pital tel ashomer.`,
            description2:`Alors que je cherchais une m??thode naturelle pour soulager la douleur du p??re de mes enfants, ??tant atteint de scl??rose en plaques et souffrant du trijumeau, j'ai entendu parl?? de la m??thode neuroptimal??.`,
            description3:`C'est ?? peu pr??s ?? m??me ??poque que je rencontrais, ?? Eilat, Emmanuelle Ta??eb, z"l, qui m'expliquait le fonctionnement de cette magnifique m??thode, et en discutant je d??couvre que, non seulement cette m??thode peut aider mon ex mari ?? mieux g??rer ses douleurs, mais ??galement apaiser mes enfants, qui ont d??velopp??s, ?? cause de la situation, une angoisse de la mort et de la maladie.`,
            description4:`Je comprends alors qu'il est temps de m'??quiper et de continuer sur ma voie de diffusion de bien-??tre, en proposant des entra??nements c??r??braux gr??ce ?? cette merveilleuse m??thode.`,
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
            description1:`J'avais entendu parler du neurofeedback lors d'une ??mission sur l'autisme sur le fait qu'un enfant avait r??ussi ?? d??velopper son langage gr??ce ?? la m??thode.`,
            description2:`J'ai voulu essayer la m??thode sur ma fille de 11 ans ?? l'??poque qui ne parlait pas du tout ne dormait pas la nuit ??tait compl??tement dans son monde. J'ai alors contact?? Jenny qui m'a expliqu?? la m??thode neuroptimal??, et j'ai vite pris rendez vous avec Joseph, et nous sommes vite devenus proches.`,
            description3:`Apr??s quelques sessions j'ai remarqu?? que Noa a commenc?? ?? dormir la nuit et ?? ??tre plus avec nous, ??tait moins passive. `,
            description4:`J'ai donc fait faire ?? mon fils qui lui aussi est autiste des sessions et j'ai remarqu?? qu'il arrivait mieux ?? s'exprimer. Il avait plus de mots ?? son vocabulaire et savait les utiliser correctement.
            ??tant donn?? que le besoin pour ma famille ??tait important, j'ai d??cid?? de me former et m'??quiper. `,
            description5:`A pr??sent je diffuse la m??thode autour de moi.
            ??tant d'un naturel empathique et tr??s ?? l'??coute, je me ferai un plaisir de vous accompagner dans votre progression, de chez moi ou ?? votre domicile.`,
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
            description1:`Apr??s plusieurs exp??riences en neurofeedback dynamique plus que r??ussies, j'ai d??cid?? de suivre la formation et d'apporter aide et soutien ?? ceux qui en avaient besoin.`,
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
            description1:`Comme pour beaucoup de famille notre alyah, il y a 5 ans, a ??t?? un peu difficile pour la famille; mais particuli??rement pour mon fils de 11 ans.
            Lui qui avait surmont??  ses difficult??s d'apprentissage en France, ne supportait pas ce changement, trop radical, et avait beaucoup de mal ?? s'int??grer.`,
            description2:`Il avait perdu sa joie de vivre, ??tait de plus en plus bagarreur, on sentait r??ellement et son mal ??tre, et nous culpabilisions beaucoup de l'avoir entra??n?? dans cette situation. 
            Bien que notre alyah avait ??t?? bien pr??par??e, il semblait que ce n'??tait pas suffisant.
            En France, gr??ce ?? l'aide de sp??cialistes, en psychologie, psychomotricit?? et orthophonie, il avait ??norm??ment progress??, mais on sentait une rechute ?? cause de ses difficult??s d'int??gration. En plus, il ne voulait pas se sentir davantage diff??rent que ce qu'il ??tait d??j?? en tant que fran??ais, en courant les sp??cialistes ?? droite et ?? gauche. ??a aurait augment?? ses difficult??s.  `,
            description3:`J'ai donc cherch?? quelque chose qui l'aiderait sans effort particulier. 
            Apr??s de longues recherches, je finis par d??couvrir le dynamical neurofeedback????? qui correspondait ?? toutes mes attentes et dont je d??couvrais les r??sultats des plus surprenants. 
            `,
            description4:`J'ai toujours su que les ??preuves qu'on re??oit ont un but en soit, et que si Hashem me donnait la mission d'aider mon fils, je pouvais le faire et ??a aurai un sens.
            Et j'en ai eu la preuve.
            Au fur et ?? mesure des entra??nements neuroptimal?????; je voyais mon fils retrouver sa motivation; il chantait, et m??me en h??breu. Et plus mon fils retrouvait sa joie de vivre plus la famille retrouvait son ??quilibre. `,
            description5:`C'est ainsi que j'ai compris que cette ??tape de ma vie ??tait la pour me faire d??couvrir cette m??thode et ?? mon tour aider les enfants, les mamans, perdues dans le tourbillon de la vie, a retrouver la s??r??nit??.
            Aujourd'hui je suis l?? pour vous accompagner vers une vie plus belle.`,
        },
        {
            id:7,
            photo:Woman,
            nom:'Adina Amram',
            status:'Wellness Provider',
            adresse:'J??rusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0542114104',
            description1:`Je me suis lanc??e dans l'aventure neuroptimal?? ?? la suite dune nouvelle op??ration 
            Qui m'avait vraiment affaiblit et mis le moral a z??ro. `,
            description2:`Une amie m'a proposee de faire des s??ances d'entra??nement c??r??bral neuroptimal??. Je n'??tais pas enthousiaste ?? tester encore une nouvelle m??thode mais elle a reussi a me convaincre en me parlant des bienfaits que l'on obtenait.
            `,
            description3:`Au bout de quelques seances
            Les r??sultats ont ??t??  surprenants.
             
            Mon moral est remont?? et j'ai r??ussi ?? prendre du recul par rapport ?? ma maladie et aux r??sultats que je devais recevoir par le m??decin.`,
            description4:`J'ai compris que cette m??thode devait ??tre connue.

            Jai d??cid?? de la partager autour de moi et permettre aux autres de retrouver s??r??nit??  et bien ??tre en testant la m??thode.`,
            description5:`Je suis  ?? votre disposition pour tester ?? votre tour cette m??thode.
            `,
        },
        {
            id:8,
            photo:Benaim,
            nom:'Emma Benna??m ',
            status:'Wellness Provider',
            adresse:'Shomron , J??rusalem ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0536120882',
            description1:`J'ai connu la m??thode par Emmanuelle Taieb zal.`,
            description2:`J'??tais ?? un tournant dans ma vie, je devais faire des choix et tout ??tait confus.`,
            description3:`En faisant les s??ances, c'est comme si toutes les pi??ces du puzzle s'emboitaient les unes aux autres, tout est devenu clair et les d??cisions que j'ai prise par la suite ??taient une ??vidence.
            Toutes mes peurs qui m'emp??chaient d'avancer avaient disparues.`,
            description4:`Si cela m'a aid?? alors autant en profiter pour aider les autres!`,
            description5:`Je suis form??e en parall??le ?? la sophrologie, trans PNL et EFT.
            Et j'associe les exercices de respiration et visualisation guid??e aux s??ances.`,
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
            description1:`Ma rencontre avec la m??thode NEUROPTIMAL?? a d??marr?? avec mon fils ?? l'??ge de 6 ans.
            Avec l'entr??e au cp on a remarqu?? un manque de concentration et d'attention.`,
            description2:`Etant contre la r*****e je me suis int??ress??e sur plusieurs th??rapies alternatives et j'ai rencontr?? une wellness provider qui a su prendre mon fils avec beaucoup de douceurs et quelques sessions plus tard, c'??tait pour moi la r??v??lation.`,
            description3:`J'ai eu la chance de me former avec une formatrice hors pair en France qui avec beaucoup d'amour et de patience m'a form?? et m'a aid?? ?? me lancer.
            Je suis dipl??m??e depuis juin 2018.`,
            description4:`Je me tiens ?? votre disposition pour vous accompagner et vous aider ?? vous sentir mieux `,
            description5:`N'h??sitez pas ?? me contacter pour tous renseignements ou prise de rdv au 0548131475 .`,
        },
        {
            id:10,
            photo:Man,
            nom:'Ruben Glaser ',
            status:'Wellness Provider',
            adresse:'J??rusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0585881696',
            description1:`Etudiant en psychologie, ?? l???Open University de Jerusalem, et praticien Neurofeedback, je vous accompagne pour tout trouble d???anxi??t??, stress, insomnie, addiction???`,
            description2:`La recherche ?? toujours ??t?? pour moi une porte d???entr??e de ce que notre monde int??rieur peut nous offrir.`,
            description3:`Mon int??r??t est encore plus grand lorsque l???on parle de ?? m??thode ?? optimiste. En effet la m??thode NeurOptimal??, est une alternative incroyable ?? la Ritaline, qui agresse nos enfants ici en Israel. Mais pas que, mon int??r??t m???a emmen?? a chercher l???avis des psychologue ou autre professionnel de la sant??.`,
            description4:`L???unanimit?? ??tait telle que j???ai voulu essayer personnellement, et de fils en aiguilles, mes proches, mes amis, ma famille???`,
            description5:`Ce qui me donne la chance aujourd???hui de vous offrir mon savoir, mes capacit??s, et surtout ma passion pour les approches optimistes de la psychologie, et les m??thodes d???exceptions qui nous permettent d???exploiter au maximum nos capacit??s afin d?????tre la meilleur version de soi m??me.
            www.israelneurofeedback.com`,
        },
        {
            id:11,
            photo:Nehama,
            nom:'N??hama Haviv',
            status:'Wellness Provider',
            adresse:'Kohav Yaakov',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0546278902',
            description1:`J'ai d??couvert la m??thode neuroptimal ?? lorsque (graphiste ?? la base) j'ai eu ?? faire le design d'un prospectus concernant cette m??thode. Tr??s vite, je me suis sentie attir??e et je m'y suis int??ress??e davantage.`,
            description2:`De l??, je me suis retrouv??e ?? faire des s??ances ?? mes enfants et moi-m??me et tr??s vite, on en a tous ressenti les bienfaits, chacun selon les besoins qu'il avait. J'ai pu v??ritablement voir la sp??cialit?? de cette m??thode qui comble les besoins de chacun, si diff??rents les uns des autres.`,
            description3:`J'ai d??cid?? alors de me lancer aussi dans cette aventure et depuis j'aide et accompagne les personnes d??sirant ??galement faire ces entra??nements c??r??brales afin d'obtenir le meilleur d'eux-m??mes!`,
            description4:`Au plaisir de me mettre ?? votre disposition!`,
            description5:``,
        },
        {
            id:12,
            photo:Simha,
            nom:'Alona Simha Aboujdid',
            status:'Wellness Provider',
            adresse:'J??rusalem ',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0544357703',
            description1:`Je m'appelle Alona Simha Aboujdid, j'habite ?? J??rusalem depuis plus de 30 ans, je suis bilingue h??breu/fran??ais, je fais parti de l'??quipe wellness provider Isra??l, et j'utilise le syst??me neuroptimal ??, depuis quelques ann??es avec l'aide de jenny, mon mentor.`,
            description2:`Je re??ois chez moi et me d??place ??galement ?? domicile.`,
            description3:`Je suis au Shouk Mahan?? Y??ouda et pr??te ?? aider pour ??tre dans un monde meilleur.`,
            description4:`La m??thode neuroptimal?? est le meilleur moyen que je connaisse.`,
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
            adresse:'J??rusalem',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0542851397',
            description1:`J'ai d??couvert le Neurofeedback suite ?? la perte de ma fille il y a 9 ans partie suite ?? une crise d'??pilepsie. `,
            description2:`J'ai cherch?? comment on peut espacer et att??nuer les crises et je suis tomb??e sur cette m??thode qui marche aux USA depuis pr??s d'une vingtaine d'ann??es et je me suis dit : "c'est ??a que je veux faire !!".`,
            description3:`Je veux aider les gens ?? aller mieux ?? devenir la meilleure version d'eux m??me. 
            J'ai gr??ce ?? D... d'excellents r??sultats avec tous mes clients et j'encourage quiconque ?? venir tester la m??thode pour de sentir plus en phase, plus r??silient et plus heureux de vivre chaque jour comme un nouveau challenge.`,
            description4:`Facebook: dina-neurofeedback J??rusalem `,
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
            description1:`Mon nom est Val??rie Cohen, Parisienne d???origine ayant pos?? ses valises ?? Tel-Aviv depuis bient??t 5 ans.`,
            description2:`Ma fille est ??g??e de 24 ans, elle a ??t?? diagnostiqu??e autiste ?? l'??ge de 6 ans . Lorsque le diagnostic a ??t?? pos??, tout autour de moi, affirmait que c'??tait irr??versible, on ne gu??rit pas de l'autisme.

            J'ai subi les d??couragements et le d??sespoir. Mais, je n'ai pas baiss?? les bras, je n'ai eu de cesse de m'informer sur l'autisme, tout le temps, j'ai tout tent?? et ?? chaque fois avec le m??me espoir. Mais face ?? l'impossible on ne peut attendre que le miracle.`,
            description3:`Dans chaque th??rapie,  j'ai vu et compris qu'une petite parcelle du miracle tant attendu s'offrait ?? nous, ?? elle en particulier. Ces parcelles ont ??t?? suffisantes pour avoir envie de continuer pour elle.

            C'est ?? elle que  je dois d'avoir d??couvert le NeurOptimal?? Dynamic gr??ce auquel elle a pu r??ussir son BAC avant de faire son alya.
            
             Aujourd???hui, Laura est heureuse et ??panouie et a fini son service militaire dans l'arm??e de l'air isra??lienne en tant que ma??tre chien. Elle travaille aujourd'hui en cyber apr??s une certification dans le domaine et, avoir ??t?? d??clar??e par l'arm??e avec un " simple "  m??dium ADHD ( trouble de l'attention) . `,
            description4:`Cette histoire est la mienne, elle fait partie de mon parcours, mais je ne me suis pas arr??t??e ?? Laura, des centaines de t??moignages sont arriv??s ?? moi et  attestent les r??sultats remarquables de NeurOptimal?? Dynamic sur notre comportement, sur notre vie, nos relations, notre bien-??tre et notre sant??.

            Mon propre p??re a ??galement  r??ussi ?? se d??barrasser de ses acouph??nes qui ne lui laissaient pas de r??pit gr??ce ?? cette m??me th??rapie. 
            
            C'est ainsi qu'au moment de faire mon alya , j'ai choisi de promouvoir cet entra??nement c??r??bral et d'en faire mon m??tier. 
            
            Combien de personnes qui vivaient avec des insomnies, des maux de t??tes r??current sans origine m??dicale,  troubles alimentaires, toc, crises d'angoisses, crises d'anxi??t??, ont r??ussi ?? les  contourner gr??ce au NeurOptimal?? Dynamic et peuvent attester d'une vie optimale.`,
            description5:`Je vous accueille tous les jours dans mon cabinet de Neuro Feedback situ?? au c??ur de la ville blanche. ?? tr??s vite !`,
        },
        {
            id:16,
            photo:Levana,
            nom:'Levanah ??den',
            status:'Wellness Provider',
            adresse:'Raanana-Dom & environs',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0503535487',
            description1:`Je suis ??galement coach de vie.`,
            description2:``,
            description3:``,
            description4:``,
            description5:``,
        },
        {
            id:17,
            photo:Karen,
            nom:'Karen Miaskovsky',
            status:'Wellness Provider',
            adresse:'Hadera et alentours',
            drapeau:Israel,
            pays:' Israel',
            whatsapp:'',
            tel:'',
            telAffiche:'0546007883',
            description1:`Ma d??couverte avec le Neurofeedback a d??marr?? avec un de mes enfant, qui ressentait beaucoup de stress dans son quotidien.`,
            description2:`J'ai commenc?? quelques s??ances, nous avons pu observer d'excellents r??sultats. J'ai ??t?? s??duite par cette m??thode.

            J'ai ensuite d??cid?? de me former ?? cette m??thode afin d'aider les gens ?? se sentir mieux.`,
            description3:`Je vous invite vraiment ?? tester la m??thode Neurofeedback qui est r??volutionnaire.`,
            description4:`Je suis praticienne dans le Nord sur Hadera et alentours, et je me d??place ??galement ?? domicile.`,
            description5:`A tr??s vite`,
        },
    ])


    return (
        <div className='Wellness'>
            <Nav />
            <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
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
            <div className="vide"></div>
            <Footer/>
        </div>
    )
}

export default Wellness