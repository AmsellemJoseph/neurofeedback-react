import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import Accordeon from './Accordeon'
import Footer from '../footer/Footer';

const Blog = () => {

    const [getBlog, setBlog] = useState([]);

    useEffect(() => {
        const blog = async () => {
            const URL = `https://www.wellness-israel.net/api/Blog/getBlog`;
            const res = await fetch(URL);
            const response = await res.json()
            console.log(response);
            setBlog(response.Table)
            console.log(getBlog);
        }
        blog();
    }, [])

    return (
        <div className="blogContainer">
            <Nav />
            <h2>BLOG</h2>
            {getBlog.reverse().map((blog, i) => {
                return (
                    <Accordeon key={i} titre={blog.Titre} texte={blog.Texte}/>
                )
            })}
            <Footer />
        </div>
    )
}

export default Blog