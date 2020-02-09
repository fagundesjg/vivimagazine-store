export interface ISubItem {
  label: string;
  path: string;
}

export interface IItem {
  label: string;
  path: string;
  items: ISubItem[];
}

export interface INavbar {}
