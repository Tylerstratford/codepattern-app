// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// OCP -  This is also closed for modification but open for extension through further interfaces, this is an extension from BaseAttributes -  the only new property 
        // is occasions that, at this moment is unique to dresses
// SRP -  This interface is responsible for defining a Dress

import { BaseAttributes } from "./IBaseAttributes"

export interface DressInterface extends BaseAttributes {
occasions: string
}