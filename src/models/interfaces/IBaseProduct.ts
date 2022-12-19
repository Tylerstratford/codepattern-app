// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// OCP -  This is also closed for modification but open for extension through further interfaces, such as IBaseAttributes (extension)
// SRP -  This interface is responsible for the base properties of a product, i.e all products must have these properties


export interface BaseProductInterface {
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
