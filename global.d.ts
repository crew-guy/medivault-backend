import { Node } from 'cheerio';

declare global {
  interface ModifiedNode extends Node {
    data: string;
  }
}

export { global };
