import { injectable } from "inversify";
import axios from 'axios';

import { BASE_API_URL } from '../../constants';
import { CustomerLoginModel, CustomerAddModel } from "../../models";
import { ILoginPepo } from "./login.interface";

@injectable()
export class LoginRepository extends ILoginPepo {
    public loginCheck (customerInfo: CustomerLoginModel): Promise<CustomerAddModel> {
        return axios.post(BASE_API_URL +'/login',
            {
                email: customerInfo.email,
                password: customerInfo.password            
            })
            .then(response => {
                return response.data;
            }
        );
    }
}