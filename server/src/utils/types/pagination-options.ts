export interface IPaginationOptions<T> {
  page: number;
  limit: number;
  filters?: T;
}
