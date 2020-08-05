const path = require(`path`);// highlight-line
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `articles` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions; // highlight-line
    const results = [
        {
            "title": "My first article",
            "description": "this is a top example article",
            "image_url": "https://rossoporpora.it/wp-content/uploads/2018/10/placeholder-01.jpg",
            "content": "test\n" +
                "\n" +
                "|a|b|\n" +
                "|-|-|",
            "date": "String"
        }
    ];

    results.forEach(article => {
        createPage({
            path: '/article/' + slugify(article.title),
            component: path.resolve(`./src/templates/article-page.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                title: article.title,
                description: article.description,
                image_url: article.image_url,
                content: article.content,
                date: article.date

            },
        })
    })
    // highlight-end
}
