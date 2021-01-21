export interface IPagination<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface IPaginateProps {
  take?: number;
  page?: number;
}
