// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// SRP -  This interface is responsible for defining occasions and used with OccaionModel
// I could have had occasions in a the database but choose to do it this way to keep the database simple

export interface OccasionsInterface {
    id: number,
    occasion: string
}