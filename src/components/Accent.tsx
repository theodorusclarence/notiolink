import * as React from 'react';

import clsxm from '@/lib/clsxm';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsxm(
        'transition-colors',
        // 'from-primary-300/40 to-primary-400/40 via-primary-300/40',
        'text-transparent bg-clip-text bg-gradient-to-tr from-emerald-400 to-amber-400',
        className
      )}
    >
      {children}
    </span>
  );
}
