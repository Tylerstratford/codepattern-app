// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// SRP -  This interface is responsible for defining seasons and used with SeasonsModel
// I could have had seasons in a the database but choose to do it this way to keep the database simple

export interface SeasonsInterface {
    Id: number,
    Season: string
}