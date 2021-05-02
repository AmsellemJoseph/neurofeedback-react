import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import Accordeon from './Accordeon'
import Footer from '../footer/Footer';
import Ecrivez from '../material-ui/Ecrivez-nous'

const Blog = () => {

    const [getBlog, setBlog] = useState([]);

    useEffect(() => {
        const blog = async () => {
            const URL = `https://www.wellness-israel.net/api/Blog/getBlog`;
            const res = await fetch(URL);
            const response = await res.json()
            setBlog(response.Table)
        }
        blog();
    }, [])
    
    console.log(getBlog);
    return (
        <div className="blogContainer">
            <Ecrivez/>
            <Nav />
            <h2>BLOG</h2>
            {getBlog.reverse().map((blog, i) => {
                return (
                    <Accordeon key={i} titre={blog.Titre}
                    intro={blog.intro}
                    texte1={blog.Texte1}
                    texte2={blog.Texte2}
                    texte3={blog.Texte3}
                    texte4={blog.Texte4}
                    texte5={blog.Texte5}
                    texte6={blog.Texte6}
                    texte7={blog.Texte7}
                    texte8={blog.Texte8}
                    texte9={blog.Texte9}
                    texte10={blog.Texte10}
                    texte11={blog.Texte11}
                    texte12={blog.Texte12}
                    texte13={blog.Texte13}
                    texte14={blog.Texte14}
                    texte15={blog.Texte15}
                    texte16={blog.Texte16}
                    texte17={blog.Texte17}
                    texte18={blog.Texte18}
                    texte19={blog.Texte19}
                    texte20={blog.Texte20}
                    />
                )
            })}
            {/* <Footer /> */}
        </div>
    )
}

export default Blog