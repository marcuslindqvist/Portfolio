require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Marcus Portfolio',
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACEID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {},
                // Set to false to allow builds to continue on image errors
                failOnError: true,
                // deprecated options and their defaults:
                base64Width: 20,
                forceBase64Format: `jpg`, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: true,
                defaultQuality: 50,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-fontawesome-css`,
    ],
};
