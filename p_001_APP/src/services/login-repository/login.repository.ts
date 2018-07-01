import { injectable } from "inversify";
import axios from 'axios';

import { BASE_API_URL } from '../../constants';
import { CustomerLoginModel, CustomerAddModel } from "../../models";
import { ILoginPepo } from "./login.interface";

@injectable()
export class LoginRepository extends ILoginPepo {
    public getToken (customerInfo: CustomerLoginModel): Promise<{token: string}> {
        return axios.post(BASE_API_URL +'/login',
            {
                email: customerInfo.email,
                password: customerInfo.password            
            })
            .then(response => response.data);
    }

    public getCustomerDataWithToken(token: string): Promise<CustomerAddModel> {
        return axios.post(BASE_API_URL + '/auth',
            { token: token }
        ).then(response => response.data).catch(err => console.log(err));
    }
}