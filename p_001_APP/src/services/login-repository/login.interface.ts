import { CustomerModel } from "../../models";
import { injectable } from "inversify";

@injectable()
export abstract class ILoginPepo {
    public abstract getToken(customerInfo: CustomerModel): Promise<{token: string}>;
    public abstract getCustomerDataWithToken(token: string): Promise<CustomerModel>;
}