import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage, { NextImageProps } from '@/components/NextImage';

type FaviconProps = {
  fullUrl: string;
} & Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'>;

export default function Favicon({ className, fullUrl, ...rest }: FaviconProps) {
  const FAVICON_URL = 'https://icons.duckduckgo.com/ip3/';
  const { hostname } = new URL(fullUrl);

  const src = FAVICON_URL + hostname + '.ico';

  return (
    <NextImage
      src={src}
      alt={`${hostname} favicon`}
      width='20'
      height='20'
      className={clsxm('', className)}
      {...rest}
    />
  );
}
