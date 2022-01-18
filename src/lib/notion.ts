import { Client } from '@notionhq/client';

import { LinkResult } from '@/types/notion';

const NOTION_LINK_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_LINK_DATABASE_ID;
const NOTION_INTEGRATION_SECRET =
  process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET;

const notion = new Client({ auth: NOTION_INTEGRATION_SECRET });

export type Url = {
  pageId: string;
  slug: string;
  link?: string;
  count: number;
};

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

  const url: Url = {
    pageId: results?.id,
    slug: results?.properties.slug.title[0]?.plain_text,
    link: results?.properties.link.rich_text[0]?.plain_text,
    count: Number(results?.properties.count.rich_text[0]?.plain_text ?? 0),
  };

  return url;
};

/**
 * Increment count column by 1
 */
export const incrementLinkCount = async (url: Url) => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  if (!url.pageId) {
    throw new Error('URL data is not found');
  }

  await notion.pages.update({
    page_id: url.pageId,
    properties: {
      count: {
        rich_text: [{ text: { content: String(url.count + 1) } }],
      },
    },
  });
};
