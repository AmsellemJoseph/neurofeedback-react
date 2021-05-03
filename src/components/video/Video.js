import React from 'react'
import Nav from '../NavBar/Nav';
import Footer from '../footer/Footer'
import Ecrivez from '../material-ui/Ecrivez-nous'
import ReactPlayer from 'react-player'
import Video0001 from '../../assets/videos/001.mp4'
import Video0002 from '../../assets/videos/002.mp4'
import Video0003 from '../../assets/videos/003.mp4'
import Video0004 from '../../assets/videos/004.mp4'
import Video0005 from '../../assets/videos/005.mp4'
import Video0006 from '../../assets/videos/006.mp4'

const Video = () => {

    return (
        <div className='containerVideo'>
            <Nav/>
            <Ecrivez/>
            <div className="video">
                <div className='vid'>
                    <ReactPlayer url={Video0001} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0002} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0003} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0004} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0005} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0006} width='300px' height='300px' controls='true' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Video