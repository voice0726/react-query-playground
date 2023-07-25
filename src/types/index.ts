export type Pageable<T> = {
  records: T[];
  total: number;
  pageSize: number;
  pageNumber: number;
  hasMore: boolean;
};
