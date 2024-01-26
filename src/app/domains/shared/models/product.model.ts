export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  creationAt: string;
  description: string;
  category: Category
}

interface Category {
  id: number,
  image: string;
  name: string;
  updatedAt: string
}
