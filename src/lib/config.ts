import { getSiteConfig } from '@/lib/get-config-value';

import { themeColor } from '@/components/layout/Layout';

// general site config
export const appName = getSiteConfig('appName');
export const seoDescription = getSiteConfig('seoDescription');
export const deployUrl = getSiteConfig('deployUrl');
export const demoMode = getSiteConfig('demoMode', 'false');
export const theme = getSiteConfig('theme') as keyof typeof themeColor;
