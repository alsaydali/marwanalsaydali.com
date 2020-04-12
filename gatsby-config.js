module.exports = {
  siteMetadata: {
    title: `Marwan Alsaydali`,
    siteUrl: `https://marwanalsaydali.com`,
    description: `I build fast beatiful websites and take pictures!`,
    author: {
      name: `Marwan Alsaydali`,
      summary: `I am a  Husband, Father, Webd Developer and Photographer.`,
    },
    social: {
      twitter: `https://twitter.com/alsaydali`,
      instagram: `https://www.instagram.com/alsaydali/`,
      github: `https://github.com/alsaydali`,
      behance: `https://www.behance.net/marwanalsaydali1`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marwan Alsaydali`,
        short_name: `Marwan`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f5f5f5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
