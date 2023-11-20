export interface Iteractor<T> {
  hasMore(): boolean;
  next(): T | undefined;
}
