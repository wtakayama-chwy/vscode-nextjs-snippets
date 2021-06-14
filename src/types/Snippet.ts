export type Snippet = {
  body: string[] | string;
  prefix: string[] | string;
  description: string;
};

export type SnippetJson = Record<string, Snippet>;
