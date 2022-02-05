import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { HiClipboard } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';
import { trimHttps } from '@/lib/helper';

import PrimaryLink from '../components/links/PrimaryLink';

type CopyBoxProps = {
  link: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function CopyBox({ className, link, ...rest }: CopyBoxProps) {
  return (
    <div
      className={clsxm(
        'flex max-w-sm items-center gap-2 rounded border border-gray-300 p-2 pl-4 dark:border-gray-600',
        className
      )}
      {...rest}
    >
      <div className='flex-grow text-left'>
        <PrimaryLink href={link} className='text-lg'>
          {trimHttps(link)}
        </PrimaryLink>
      </div>

      <CopyToClipboard
        text={link}
        onCopy={() => toast.success(`${trimHttps(link)} copied to clipboard`)}
      >
        <button className='rounded-full p-2 text-gray-600 hover:text-primary-400 focus:outline-none focus:ring focus:ring-primary-400 dark:text-white'>
          <HiClipboard className='text-lg' />
        </button>
      </CopyToClipboard>
    </div>
  );
}
