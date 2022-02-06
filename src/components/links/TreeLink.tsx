/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { Tree } from '@/lib/notion';

type TreeLinkProps = {
  link: Pick<Tree, 'display' | 'link' | 'icon'>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TreeLink({
  className,
  link: { display, link, icon },
  ...rest
}: TreeLinkProps) {
  return (
    <div className={clsxm('group relative', className)} {...rest}>
      <div
        className={clsx(
          'opacity-0 group-hover:opacity-100',
          'absolute -inset-0.5 z-0 animate-tilt rounded blur',
          'accent-gradient bg-gradient-to-r',
          'transition duration-300 group-hover:duration-200',
          'milky:rounded-full',
          'pointer-events-none',
          'street:group-hover:animate-flickerStreet'
        )}
      />

      <a
        href={link}
        className={clsx(
          'relative flex items-center justify-center gap-2',
          'px-4 py-4 font-medium transition-colors md:text-lg',
          'border',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'border-gray-400 bg-white',
          'dark:border-gray-600 dark:bg-dark',
          'milky:rounded-full milky:bg-milky-100 milky:text-milky-500',
          'street:bg-street-800'
        )}
      >
        {icon ? (
          icon.type === 'emoji' ? (
            icon.emoji + ' '
          ) : icon.type === 'external' ? (
            <img
              src={icon.external.url}
              width={20}
              height={20}
              className='text-transparent'
              alt={`${display} Icon`}
            />
          ) : (
            <img
              src={icon.file.url}
              width={20}
              height={20}
              className='text-transparent'
              alt={`${display} Icon`}
            />
          )
        ) : null}
        {display}
      </a>
    </div>
  );
}
