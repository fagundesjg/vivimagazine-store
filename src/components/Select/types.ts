export interface IOption {
  label: string;
  path: string;
}

export interface ISelect {
  label: string;
  options: IOption[];
  path?: string;
}
