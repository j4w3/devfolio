module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://dainty-syrniki-302c7a.netlify.app/`,
    // Your Name
    name: 'Jason Wong',
    // Main Site Title
    title: `Jason Wong | Product Manager`,
    // Description that goes under your name in main bio
    description: `Product manager, venture scout, & angel investor`,
    // Optional: Twitter account handle
    author: `@json2txt`,
    // Optional: Github account URL
    github: `https://github.com/j4w3`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/j4w3`,
    // Content of the About Me section
    about: `I'm a product manager passionate about creating products from 0 to 1. By night I write about the most impactful private tech companies and connect startups with investors. For inquiries or if you'd like to grab a coffee, you can reach me at mail (at) j4w3 (dot) com.`,
    // Optional: List your activities, they must have `name` and `description`. `link` is optional.
    activities: [
      {
        name: 'Product Lead',
        description:
          'Building Starcraft IRL. Hiring across engineering, product, growth, and more',
        link: 'https://www.anduril.com/',
      },
      {
        name: 'Venture Scout',
        description:
          'Connecting seed stage companies in fintech, e-commerce, enterprise, and more to Grishin Robotics. Reach out if you\'re a founder looking to get traction',
        link: 'https://www.grishinrobotics.com/',
      },
      {
        name: 'Research Fellow',
        description:
          'Researching and writing about the most impactful private tech companies. If you\'ve got suggestions, I\'m all ears',
        link: 'https://research.contrary.com/',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Lattice',
        description:
          'AI-enabled software platform for command and control of autonomous systems',
        link: 'https://www.anduril.com/mission-autonomy/',
      },
      {
        name: 'Sentry Tower',
        description:
          'Autonomously detect and track moving objects in the world from miles away',
        link: 'https://www.anduril.com/capability/land/',
      },
      {
        name: 'Self-Driving Uber',
        description:
          'Building a safer, driverless future',
        link: 'https://www.youtube.com/watch?v=EYh0F_8ZdSU',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Anduril',
        description: 'Product Manager | February 2021 - Present',
        link: 'https://www.anduril.com/',
      },
      {
        name: 'Uber ATG',
        description: 'Product Manager | October 2018 - January 2021',
        link: 'https://www.uber.com/us/en/autonomous/',
      },
      {
        name: 'Lockheed Martin',
        description: 'Software Engineer | January 2017 - October 2018',
        link: 'https://www.lockheedmartin.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //   },
    //   {
    //     name: 'Databases',
    //     description: 'MongoDB, PostreSQL, MySQL',
    //   },
    //   {
    //     name: 'Other',
    //     description:
    //       'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //   },
    // ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
