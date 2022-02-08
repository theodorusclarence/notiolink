import * as React from 'react';

import clsxm from '@/lib/clsxm';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsxm(
        'transition-colors',
        'accent-gradient bg-gradient-to-tr bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
