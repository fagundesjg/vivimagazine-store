export enum GenderEnum {
  Male = 'm',
  Female = 'f',
}

export interface ICategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ISubCategory {
  id: string;
  name: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  [key: string]: any;
  id: string;
  category: ICategory;
  subcategory: ISubCategory;
  description: string;
  gender: GenderEnum;
  quant: number;
  image1: string;
  image2?: string;
  image3?: string;
  name: string;
  price: number;
  discount?: number;
  created_at: Date;
  updated_at: Date;
}
