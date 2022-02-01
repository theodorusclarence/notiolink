import * as React from 'react';

import clsxm from '@/lib/clsxm';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsxm(
        'transition-colors',
        'text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 to-pink-300',
        className
      )}
    >
      {children}
    </span>
  );
}
