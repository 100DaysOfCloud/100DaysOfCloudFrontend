module.exports = {
    siteMetadata: {
        title: `100DaysOfCloud`,
        description: `Official Website of the #100DaysOfCloud Community Challenge`,
        author: `@antonio_lofiego`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `100DaysOfCloud`,
                short_name: `100DOC`,
                start_url: `/`,
                icon: `static/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
