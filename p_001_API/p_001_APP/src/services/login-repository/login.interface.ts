import { CustomerLoginModel, CustomerAddModel } from "../../models";

export abstract class ILoginPepo {
    public abstract loginCheck(customerInfo: CustomerLoginModel): Promise<CustomerAddModel>;
    
}