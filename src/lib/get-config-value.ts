/** @see https://github.com/transitive-bullshit/nextjs-notion-starter-kit */
import rawSiteConfig from '../../notiolink.config.js';

if (!rawSiteConfig) {
  throw new Error(`Config error: invalid notiolink.config.js`);
}

const siteConfig = {
  ...rawSiteConfig,
};

export function getSiteConfig(
  key: keyof typeof siteConfig,
  defaultValue?: string
) {
  const value = siteConfig[key];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(
    `Config error: missing required notiolink config value "${key}"`
  );
}
