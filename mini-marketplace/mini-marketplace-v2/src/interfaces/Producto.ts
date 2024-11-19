export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string[];
  }
  
  export interface Category {
    slug: string;
    name: string;
  }
  