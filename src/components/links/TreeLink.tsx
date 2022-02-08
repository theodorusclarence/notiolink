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
          'group-hover:opacity-100 opacity-0',
          '-inset-0.5 absolute animate-tilt blur rounded z-0',
          'accent-gradient bg-gradient-to-r',
          'duration-300 group-hover:duration-200 transition',
          'milky:rounded-full',
          'pointer-events-none',
          'street:group-hover:animate-flickerStreet'
        )}
      />

      <a
        href={link}
        className={clsx(
          'flex gap-2 items-center justify-center relative',
          'font-medium px-4 py-4 transition-colors md:text-lg',
          'border',
          'focus-visible:ring focus-visible:ring-primary-500 focus:outline-none',
          'bg-white border-gray-400',
          'dark:bg-dark dark:border-gray-600',
          'milky:bg-milky-100 milky:rounded-full milky:text-milky-500',
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
