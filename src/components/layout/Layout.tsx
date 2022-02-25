import clsx from 'clsx';
import * as React from 'react';

import { config, themeColor } from '@/lib/env';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(themeColor[config.appTheme]);

  return (
    <div className={theme}>
      <div
        className={clsx(
          'dark:bg-dark dark:text-white',
          'milky:bg-[#fff5e3] street:bg-street-800'
        )}
      >
        {config.demoMode && (
          <select
            name='theme'
            className='fixed top-4 left-4 rounded bg-transparent'
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
