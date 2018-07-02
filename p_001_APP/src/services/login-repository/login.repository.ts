import { injectable } from "inversify";
import axios from 'axios';

import { BASE_API_URL } from '../../constants';
import { CustomerModel } from "../../models";
import { ILoginPepo } from "./login.interface";

@injectable()
export class LoginRepository extends ILoginPepo {
    public getToken (customerInfo: CustomerModel): Promise<{token: string}> {
        return axios.post(BASE_API_URL +'/login',
            {
                name: customerInfo.name,
                password: customerInfo.password            
            })
            .then(response => response.data);
    }

    public getCustomerDataWithToken(token: string): Promise<CustomerModel> {
        return axios.post(BASE_API_URL + '/auth',
            { token: token }
        ).then(response => response.data).catch(err => console.log(err));
    }
}