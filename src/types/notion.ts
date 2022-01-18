export interface LinkResult {
  id: string;
  properties: LinkProperties;
}

interface LinkProperties {
  count: TextColumn;
  link: TextColumn;
  slug: TitleColumn;
}

interface TitleColumn {
  id: string;
  type: string;
  title: [RichText];
}

interface TextColumn {
  id: string;
  type: string;
  rich_text: [RichText];
}

interface RichText {
  type: string;
  plain_text: string;
}
