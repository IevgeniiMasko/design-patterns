import { MenuItem } from './menu-item';

export interface Iteractor<T> {
  hasMore(): boolean;
  next(): T | undefined;
}

export interface IMenu {
  createIterator(): Iteractor<MenuItem>;
}
