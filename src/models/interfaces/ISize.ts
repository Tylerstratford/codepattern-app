// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// SRP -  This interface is responsible for the implementation of sizes and used with SizeModel
// I could have had sizes in a the database but choose to do it this way to keep the database simple

export interface SizeInterface {
    id: number,
    size: string
}