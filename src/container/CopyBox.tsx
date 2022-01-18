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
        'flex gap-2 items-center p-2 pl-4 max-w-sm rounded border border-gray-600',
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
        <button className='p-2 rounded-full hover:text-primary-400 focus:ring focus:ring-primary-400 focus:outline-none'>
          <HiClipboard className='text-lg' />
        </button>
      </CopyToClipboard>
    </div>
  );
}
