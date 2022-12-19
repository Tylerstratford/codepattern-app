// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// LSP - Only properties that are needed/neccessary are are inherited from this interface
// OCP -  This is also closed for modification but open for extension through further interfaces
// SRP -  This interface is responsible for the "visual" aspects of a product

import { BaseProductInterface } from "./IBaseProduct"
export interface BaseAttributes extends BaseProductInterface {
    size: string,
    color: string
}