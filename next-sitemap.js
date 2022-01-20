/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { deployUrl } = require('./notiolink.config.js');

module.exports = {
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: deployUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
