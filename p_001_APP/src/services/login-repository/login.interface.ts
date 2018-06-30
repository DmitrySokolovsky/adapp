import { CustomerLoginModel, CustomerAddModel } from "../../models";
import { injectable } from "inversify";

@injectable()
export abstract class ILoginPepo {
    public abstract getToken(customerInfo: CustomerLoginModel): Promise<{token: string}>;
    public abstract getCustomerDataWithToken(token: string): Promise<CustomerAddModel>;
}