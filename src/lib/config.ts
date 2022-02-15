import { getSiteConfig } from '@/lib/get-config-value';

// general site config
export const appName = getSiteConfig('appName');
export const seoDescription = getSiteConfig('seoDescription');
export const deployUrl = getSiteConfig('deployUrl');
