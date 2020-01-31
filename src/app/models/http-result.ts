import {Product} from '../product';

export interface HttpResult {
  success: boolean;
  message: string;
  data: Product[] | Product | any ;
}
