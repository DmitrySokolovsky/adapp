import { CustomerLoginModel, CustomerAddModel } from "../../models";
import { injectable } from "inversify";

@injectable()
export abstract class ILoginPepo {
    public abstract loginCheck(customerInfo: CustomerLoginModel): Promise<CustomerAddModel>;
    
}