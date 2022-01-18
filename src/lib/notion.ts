import { Client } from '@notionhq/client';

import { LinkResult } from '@/types/notion';

const NOTION_LINK_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_LINK_DATABASE_ID;
const NOTION_INTEGRATION_SECRET =
  process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET;

const notion = new Client({ auth: NOTION_INTEGRATION_SECRET });

/**
 * Get long URL by slug
 */
export const getUrlBySlug = async (slug: string) => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_LINK_DATABASE_ID,
    filter: {
      property: 'slug',
      title: { equals: slug },
    },
  });

  const results = response.results[0] as unknown as LinkResult;
  const url = {
    slug: results?.properties.slug.title[0].plain_text,
    link: results?.properties.link.rich_text[0].plain_text,
    count: Number(results?.properties.count.rich_text[0].plain_text),
  };

  return url;
};
