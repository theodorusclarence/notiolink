import { getEnv, getSiteConfig } from '@/lib/get-config-value';

// general site config
export const appName = getSiteConfig('appName');
export const seoDescription = getSiteConfig('seoDescription');
export const deployUrl = getSiteConfig('deployUrl');
export const twitter = getSiteConfig('twitter');

// env
export const isServer = typeof window === 'undefined';
export const NOTION_LINK_DATABASE_ID = getEnv(
  'NEXT_PUBLIC_NOTION_LINK_DATABASE_ID',
  isServer ? undefined : null
);
export const NOTION_TREE_DATABASE_ID = getEnv(
  'NEXT_PUBLIC_NOTION_TREE_DATABASE_ID',
  isServer ? undefined : null
);
export const NOTION_INTEGRATION_SECRET = getEnv(
  'NEXT_PUBLIC_NOTION_INTEGRATION_SECRET',
  isServer ? undefined : null
);
export const APP_PASSWORD = getEnv(
  'NEXT_PUBLIC_APP_PASSWORD',
  isServer ? undefined : null
);
export const APP_SECRET = getEnv(
  'NEXT_PUBLIC_APP_SECRET',
  isServer ? undefined : null
);
