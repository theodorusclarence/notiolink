import clsx from 'clsx';
import * as React from 'react';

import { demoMode } from '@/lib/config';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState('dark');

  return (
    <div className={theme}>
      <div
        className={clsx('dark:bg-dark dark:text-white', 'milky:bg-[#fff5e3]')}
      >
        {demoMode && (
          <select
            name='theme'
            className='fixed top-4 left-4 rounded bg-transparent'
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value='light'>light</option>
            <option value='dark'>dark</option>
            <option value='theme-milky'>milky</option>
          </select>
        )}
        {children}
      </div>
    </div>
  );
}
