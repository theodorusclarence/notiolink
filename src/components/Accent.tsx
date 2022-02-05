import * as React from 'react';

import clsxm from '@/lib/clsxm';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsxm(
        'transition-colors',
        'bg-gradient-to-tr from-emerald-400 to-amber-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
