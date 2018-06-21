import { injectable } from "inversify";
import axios from 'axios';

import { BASE_API_URL } from '../../constants';
import { CustomerLoginModel, CustomerAddModel } from "../../models";
import { ILoginPepo } from "./login.interface";

@injectable()
export class LoginRepository extends ILoginPepo {
    public loginCheck (customerInfo: CustomerLoginModel): Promise<CustomerAddModel> {
        return axios.post(BASE_API_URL + 'login/', customerInfo)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                return false;
            }
        });
    }
}