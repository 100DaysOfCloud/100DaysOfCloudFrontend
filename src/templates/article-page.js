import React from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleThumbnail from '../components/ArticleThumbnail';
import FeaturedArticle from '../components/FeaturedArticle';
import NewsCarousel from '../components/NewsCarousel';
const marked = require("marked");



export default function ArticlePage(data) {
    const pageContext = data.pageContext;
    return (
        <div className="max-w-8xl m-auto">
            <Header />

            <div className="site">
                <div className="article-title">
                    <h1>{pageContext.title}</h1>
                </div>
                <div className="article-featured-image">
                    <img src={pageContext.image_url}/>
                </div>

                <div className="article-content container">
                    <div className="content" dangerouslySetInnerHTML={{ __html: marked(pageContext.content) }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
