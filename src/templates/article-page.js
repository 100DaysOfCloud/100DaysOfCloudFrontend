import React from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
const marked = require("marked");



export default function ArticlePage(data) {
    const pageContext = data.pageContext;
    return (
        <div className="max-w-8xl m-auto">
            <Header />

            <div className="site">
                <div className="site-content">
                    <h1>{pageContext.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html: marked(pageContext.content)}} >
                </div>
                <Footer />
            </div>
        </div>
    )
}
