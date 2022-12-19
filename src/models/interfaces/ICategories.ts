// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// SRP -  This interface is responsible for the product categories and used in CategoriesModel (product creation)
// I could have had categories in a the database but choose to do it this way to keep the database simple

export interface CategoriesInterface {
    id: number,
    category: string
}