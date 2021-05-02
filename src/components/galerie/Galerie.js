import React from 'react';
import Nav from '../NavBar/Nav'
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
const Galerie = () => {

 return(
     <div className='containerPhotoMain'>
         <Nav/>
         <Ecrivez/>
         <div className='containerPhoto'>
         {/* <a href={News0001} target='_blank' rel="noreferrer"><img src={News0001} alt='presse 01'/></a> */}
             <a href={image0001} target='_blank' rel='noreferrer'><img src={image0001} alt="photo de galerie"/></a>
             <a href={image0002} target='_blank' rel='noreferrer'><img src={image0002} alt="photo de galerie"/></a>
             <a href={image0003} target='_blank' rel='noreferrer'><img src={image0003} alt="photo de galerie"/></a>
             <a href={image0004} target='_blank' rel='noreferrer'><img src={image0004} alt="photo de galerie"/></a>
             <a href={image0005} target='_blank' rel='noreferrer'><img src={image0005} alt="photo de galerie"/></a>
             <a href={image0006} target='_blank' rel='noreferrer'><img src={image0006} alt="photo de galerie"/></a>
             <a href={image0007} target='_blank' rel='noreferrer'><img src={image0007} alt="photo de galerie"/></a>
             <a href={image0008} target='_blank' rel='noreferrer'><img src={image0008} alt="photo de galerie"/></a>
             <a href={image0009} target='_blank' rel='noreferrer'><img src={image0009} alt="photo de galerie"/></a>
             <a href={image0010} target='_blank' rel='noreferrer'><img src={image0010} alt="photo de galerie"/></a>
             <a href={image0011} target='_blank' rel='noreferrer'><img src={image0011} alt="photo de galerie"/></a>
         </div>
     </div>
 )  
}
export default Galerie