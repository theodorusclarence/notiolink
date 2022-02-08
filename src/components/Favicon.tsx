import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage, { NextImageProps } from '@/components/NextImage';

type FaviconProps = {
  fullUrl: string;
} & Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'>;

export default function Favicon({ className, fullUrl, ...rest }: FaviconProps) {
  const { url, hostname } = getFaviconUrl(fullUrl);

  return (
    <NextImage
      src={url}
      alt={`${hostname} favicon`}
      width='20'
      height='20'
      className={clsxm('', className)}
      {...rest}
    />
  );
}

export const getFaviconUrl = (url: string) => {
  const FAVICON_URL = 'https://icons.duckduckgo.com/ip3/';
  const { hostname } = new URL(url);

  return { url: FAVICON_URL + hostname + '.ico', hostname };
};
