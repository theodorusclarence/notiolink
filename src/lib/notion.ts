import { Client } from '@notionhq/client';

import { LinkResult, PageIcon, TreeResult } from '@/types/notion';

const NOTION_LINK_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_LINK_DATABASE_ID;
const NOTION_TREE_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_TREE_DATABASE_ID;
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

export const getAllLinkCategories = async () => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.retrieve({
    database_id: NOTION_LINK_DATABASE_ID,
  });

  const results = response as unknown as LinkResult;

  const categories = results.properties.categories.multi_select.options.map(
    (option) => option.name
  );

  return categories;
};

/**
 * Get URLs Category
 */
export const getCategoryUrls = async (category: string) => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_LINK_DATABASE_ID,
    filter: {
      property: 'categories',
      multi_select: { contains: category },
    },
  });

  const results = response.results as unknown as LinkResult[];

  const url: Omit<Url, 'count'>[] = results
    .map((result) => ({
      pageId: result?.id,
      slug: result?.properties.slug.title[0]?.plain_text,
      link: result?.properties.link.rich_text[0]?.plain_text,
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));

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

export const checkSlugIsTaken = async (slug: string) => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_LINK_DATABASE_ID,
    filter: {
      property: 'slug',
      title: {
        equals: slug,
      },
    },
  });

  return response.results.length > 0;
};

/**
 * Add new link to the notion database
 */
export const addLink = async (
  slug: string,
  link: string,
  category?: string
) => {
  if (!NOTION_LINK_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_LINK_DATABASE_ID env is not defined');
  }

  await notion.pages.create({
    parent: {
      database_id: NOTION_LINK_DATABASE_ID,
    },
    properties: {
      slug: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: slug },
          },
        ],
      },
      link: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: link },
          },
        ],
      },
      count: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: '0' },
          },
        ],
      },
      ...(category && {
        categories: {
          type: 'multi_select',
          multi_select: [{ name: category }],
        },
      }),
    },
  });
};

export type Tree = {
  id: string;
  link: string;
  display: string;
  order: number;
  icon: PageIcon;
};

export const getSocialTree = async () => {
  if (!NOTION_TREE_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_TREE_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_TREE_DATABASE_ID,
  });

  const results = response.results as unknown as TreeResult[];

  const tree: Tree[] = results
    .map((result) => ({
      id: result.id,
      display: result.properties.display.title[0]?.plain_text,
      link: result.properties.link.rich_text[0]?.plain_text ?? '',
      order: result.properties.order.number,
      icon: result.icon,
    }))
    .sort((a, b) => a.order - b.order);

  return tree;
};
