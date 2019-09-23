module.exports = {
  siteMetadata: {
    title: `Denver Devs Hacktoberfest Night - October 10th, 6pm - 9pm`,
    description: `It's Hacktoberfest 2019! Come celebrate open source with your fellow Denver Devs!`,
    author: `@denverdevs`,
    url: `https://hacktoberfest.denverdevs.org`,
    image: `/images/ogImage.png`,
    siteUrl: `https://hacktoberfest.denverdevs.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#192343`,
        theme_color: `#192343`,
        display: `minimal-ui`,
        icon: `src/images/DD-HACK-Favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
