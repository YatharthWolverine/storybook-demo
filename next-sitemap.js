/**
 * @nameofThePackage next-sitemap (https://www.npmjs.com/package/next-sitemap)
 * @description We are using above mentioned package for handling the SEO.
 * Kindly take the inspiration from there
 */

module.exports = {
  siteUrl: "https://www.2amvc.com/",
  changefreq: "daily",
  priority: 0.8,
  sitemapSize: 5000,
  generateRobotsTxt: true,

  exclude: [],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: path === "/" ? 1 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: [
          "/",
          "/news",
          "/about-us",
          "/portfolio",
          "/team",
          "/portfolio/:portfolioDetail",
          "/team/:teamDetail",
        ],
      },
    ],
  },
};
