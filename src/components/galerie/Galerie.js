import React,{useRef} from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';

import Ecrivez from '../material-ui/Ecrivez-nous'
import image0001 from '../../assets/images/image/0001.jpg'
import image0002 from '../../assets/images/image/0002.jpg'
import image0003 from '../../assets/images/image/0003.jpg'
import image0004 from '../../assets/images/image/0004.jpg'
import image0005 from '../../assets/images/image/0005.JPG'
import image0006 from '../../assets/images/image/0006.jpg'
import image0007 from '../../assets/images/image/0007.jpg'
import image0008 from '../../assets/images/image/0008.jpg'
import image0009 from '../../assets/images/image/0009.jpg'
import image0010 from '../../assets/images/image/0010.jpg'
import image0011 from '../../assets/images/image/0011.jpeg'

const useStyles = makeStyles((theme) => ({
    Btnroot: {
        position: 'fixed',
        bottom: theme.spacing(12),
        zIndex: '100',
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

const Galerie = (props) => {

    const classes = useStyles();
    const carouselRef = useRef(null);


    const images = [image0001, image0002, image0003, image0004, image0005, image0006, image0007, image0008, image0009, image0010, image0011].map((image) => ({
        src: image
    }))

    return (
        <div className='containerPhotoMain'>
            <Nav />
            <CssBaseline />
            <ScrollTop {...props}>
                <Fab color="#11468c" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon style={{ color: '#11468c' }} />
                </Fab>
            </ScrollTop>
            <Toolbar id="back-to-top-anchor" />
            <Ecrivez />
            <div className='containerPhoto'>
                {/* <a href={image0001} target='_blank' rel='noreferrer'><img src={image0001} alt="photo de galerie"/></a>
             <a href={image0002} target='_blank' rel='noreferrer'><img src={image0002} alt="photo de galerie"/></a>
             <a href={image0003} target='_blank' rel='noreferrer'><img src={image0003} alt="photo de galerie"/></a>
             <a href={image0004} target='_blank' rel='noreferrer'><img src={image0004} alt="photo de galerie"/></a>
             <a href={image0005} target='_blank' rel='noreferrer'><img src={image0005} alt="photo de galerie"/></a>
             <a href={image0006} target='_blank' rel='noreferrer'><img src={image0006} alt="photo de galerie"/></a>
             <a href={image0007} target='_blank' rel='noreferrer'><img src={image0007} alt="photo de galerie"/></a>
             <a href={image0008} target='_blank' rel='noreferrer'><img src={image0008} alt="photo de galerie"/></a>
             <a href={image0009} target='_blank' rel='noreferrer'><img src={image0009} alt="photo de galerie"/></a>
             <a href={image0010} target='_blank' rel='noreferrer'><img src={image0010} alt="photo de galerie"/></a>
             <a href={image0011} target='_blank' rel='noreferrer'><img src={image0011} alt="photo de galerie"/></a> */}
                {/* <Carousel id="carousel"  images={images}/> */}
            </div>
            <div className='carousel-container'>
                <Carousel ref={carouselRef} images={images}/>
            </div>
            <div className="vide"></div>
            <Footer />
        </div>
    )
}
export default Galerie