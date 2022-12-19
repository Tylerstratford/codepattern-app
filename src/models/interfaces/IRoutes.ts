// Most interfaces are similar or identical to that in the backend
// All interfaces abide by the following principles:
// ISP - All interfaces are segregated and seperated, easily readable and implemntable
// SRP -  This interface is responsible for defining the routes used in RoutesModel

export interface Routes {
  routeId: number;
  route: string;
  title: string;
}
