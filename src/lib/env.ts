export const themeColor = {
  light: 'light',
  dark: 'dark',
  milky: 'theme-milky',
  street: 'theme-street dark',
  monokai: 'theme-monokai dark',
};

const getEnv = (
  environmentVariable: string,
  unvalidatedEnvironmentVariable: string | undefined
): string => {
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}. Please add them on Vercel's Environment Variables tab.`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

const getTheme = () => {
  const theme = getEnv(
    'NEXT_PUBLIC_APP_THEME',
    process.env.NEXT_PUBLIC_APP_THEME
  );

  const availableThemes = Object.keys(themeColor);

  if (availableThemes.includes(theme)) {
    return theme as keyof typeof themeColor;
  } else {
    throw new Error(
      `NEXT_PUBLIC_APP_THEME=${theme} is not a valid theme. 
Please use one of the following: ${availableThemes.join(', ')}`
    );
  }
};

export const config = {
  notionIntegrationSecret: getEnv(
    'NEXT_PUBLIC_NOTION_INTEGRATION_SECRET',
    process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET
  ),
  notionLinkDatabaseId: getEnv(
    'NEXT_PUBLIC_NOTION_LINK_DATABASE_ID',
    process.env.NEXT_PUBLIC_NOTION_LINK_DATABASE_ID
  ),
  notionTreeDatabaseId: getEnv(
    'NEXT_PUBLIC_NOTION_TREE_DATABASE_ID',
    process.env.NEXT_PUBLIC_NOTION_TREE_DATABASE_ID
  ),
  appPassword: getEnv(
    'NEXT_PUBLIC_APP_PASSWORD',
    process.env.NEXT_PUBLIC_APP_PASSWORD
  ),
  appSecret: getEnv(
    'NEXT_PUBLIC_APP_SECRET',
    process.env.NEXT_PUBLIC_APP_SECRET
  ),

  // Apps Configuration
  appName: getEnv('NEXT_PUBLIC_APP_NAME', process.env.NEXT_PUBLIC_APP_NAME),
  appTheme: getTheme(),
  demoMode: Boolean(process.env.NEXT_PUBLIC_DEMO_MODE),
};
