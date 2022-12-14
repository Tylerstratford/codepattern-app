export interface BaseProduct {
  id: number;
  occasions: string,
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  isOnSale: boolean;
  saleProcent: number;
  salePrice: number;
  size: string,
  color: string,
}
