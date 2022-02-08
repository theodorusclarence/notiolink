import clsx from 'clsx';
import * as React from 'react';

import { demoMode, theme as configTheme } from '@/lib/config';

export const themeColor = {
  light: 'light',
  dark: 'dark',
  milky: 'theme-milky',
  street: 'theme-street dark',
  monokai: 'theme-monokai dark',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(themeColor[configTheme]);

  return (
    <div className={theme}>
      <div
        className={clsx(
          'dark:bg-dark dark:text-white',
          'milky:bg-[#fff5e3] street:bg-street-800'
        )}
      >
        {demoMode === 'true' && (
          <select
            name='theme'
            className='bg-transparent fixed left-4 rounded top-4'
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {Object.entries(themeColor).map(([theme, themeClass]) => (
              <option key={theme} value={themeClass}>
                {theme}
              </option>
            ))}
          </select>
        )}
        {children}
      </div>
    </div>
  );
}
