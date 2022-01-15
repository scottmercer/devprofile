module.exports = {
    pathPrefix: '/devprofile',

    siteMetadata: {
        title: 'Scott Mercer Dev Profile',
        author: 'Scott Mercer',
        description: 'Dev Profile for Scott Mercer',
    },

    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
    ],
};
