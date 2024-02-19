import { Category } from './Category';

export type Product = {
  id: string; // Omit loai bo
  title: string;
  price: number;
  image: string;
  description: string;
  category: string; // Omit loai bo

};

export type ProductAdmin = Omit<Product, 'id'  > & {
  id: string;
  category: Category;

  
};

export type ProductAdd = Omit<Product, 'id' > & {
};