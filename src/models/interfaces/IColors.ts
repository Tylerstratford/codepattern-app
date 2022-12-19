// Most interfaces are similar or identical to that in the backend
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// OCP -  This is also closed for modification but open for extension through further interfaces
// SRP -  This interface is responsible for the colors displayed in the popout modal of a product and create a product and used with the ColorModel
// I could have had colors in a the database but choose to do it this way to keep the database simple


export interface ColorsInterface {
    id: number,
    color: string
}