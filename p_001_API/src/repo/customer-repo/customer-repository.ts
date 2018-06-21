import { CustomerAddModel, Customer, CustomerLoginModel } from "../../models/customer-models.model";
import { ICustomerRepo } from "./customer-repo-interface";
import { injectable, inject } from "inversify";
import { LoggerService } from "../../service";
import { LogStatus } from "../../constant";
//import { reject } from "bluebird";

@injectable()
export class CustomerRepository implements ICustomerRepo {
    
    public constructor(@inject(LoggerService) private loggerService: LoggerService) { 
        this.loggerService.log(`Customer Repository usage`, LogStatus.INFO);
    }

    public addCustomer(oParams: CustomerAddModel): Promise<Customer[]> {
        return new Promise<Customer[]>((resolve, reject) => {
            Customer.create().then(
                (res) => {
                    this.loggerService.log(`Set all customer success ${res}`, LogStatus.INFO);
                }
            ).catch(
                (error) => {
                    this.loggerService.log(error.errmsg, LogStatus.ERROR);
                }
            );
        });
    }

    public customerLogInCheck(oParams: CustomerLoginModel): Promise<Customer> {
        return new Promise<Customer>((resolve, reject) => {
            Customer.findOne({
                where: {
                    email: oParams.email,
                    password: oParams.password
                }
            }).then(res => resolve(res)).catch(error => this.loggerService.log(error.errmsg, LogStatus.ERROR));
        });
    }

    public getAllCustomers(): Promise<Customer[]> {
        return new Promise<Customer[]>((resolve, reject) => {
            Customer.findAll().then((res) => { 
                console.log(res);
                this.loggerService.log(`Get all customers success`, LogStatus.INFO);
                resolve(res); 
            }).catch(
                (error) => {
                    this.loggerService.log(error.errmsg, LogStatus.ERROR);
                }
            );
        });
    }
}
