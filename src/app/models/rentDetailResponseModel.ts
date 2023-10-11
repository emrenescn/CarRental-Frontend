import { RentDetail } from "./rentDetail";
import { ResponseModel } from "./responseModel";

export interface RentDetailResponseModel extends ResponseModel{
 data:RentDetail[];
}