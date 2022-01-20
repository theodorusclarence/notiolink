//#region  //*=========== Links ===========
export interface LinkResult {
  id: string;
  properties: LinkProperties;
}

interface LinkProperties {
  count: TextColumn;
  link: TextColumn;
  slug: TitleColumn;
}
//#endregion  //*======== Links ===========

//#region  //*=========== Social Tree ===========
export interface TreeResult {
  id: string;
  properties: TreeProperties;
  icon: PageIcon;
}

interface TreeProperties {
  link: TextColumn;
  display: TitleColumn;
  order: NumberColumn;
}
//#endregion  //*======== Social Tree ===========

//#region  //*=========== Commons ===========
interface ExternalIcon {
  type: 'external';
  external: {
    url: string;
  };
}
interface EmojiIcon {
  type: 'emoji';
  emoji: string;
}
interface FileIcon {
  type: 'file';
  file: { url: string };
}
export type PageIcon = ExternalIcon | EmojiIcon | FileIcon | null;

interface TitleColumn {
  id: string;
  type: 'title';
  title: [RichText];
}

interface TextColumn {
  id: string;
  type: 'rich_text';
  rich_text: [RichText | undefined];
}

interface NumberColumn {
  id: string;
  type: 'number';
  number: number;
}

interface RichText {
  type: string;
  plain_text: string;
}
//#endregion  //*======== Commons ===========
