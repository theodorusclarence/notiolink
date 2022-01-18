import * as React from 'react';
import ReactQRCode from 'react-qr-code';

export default function QRCode({
  link,
  className,
}: {
  link: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactQRCode
        value={link}
        className='mx-auto'
        bgColor='#222222'
        fgColor='var(--clr-primary-400)'
        id='QRCode'
      />
    </div>
  );
}
