import { CustomerModel, Customer } from "../../models/customer-models.model";
import { ICustomerRepo } from "./customer-repo-interface";
import { injectable, inject } from "inversify";
import { LoggerService } from "../../service";
import { LogStatus } from "../../constant";
import { sequelize } from "../../instances";
//import { reject } from "bluebird";

@injectable()
export class CustomerRepository implements ICustomerRepo {
    
    public constructor(@inject(LoggerService) private loggerService: LoggerService) { 
        this.loggerService.log(`Customer Repository usage`, LogStatus.INFO);
    }

    public addCustomer(oParams: CustomerModel): Promise<Customer[]> {
        return new Promise<Customer[]>((resolve, reject) => {
            Customer.create(oParams).then(
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

    public customerLogInCheck(oParams: CustomerModel): Promise<Customer> {
        return new Promise<Customer>((resolve, reject) => {
            Customer.findOne({
                where: {
                    name: oParams.name,
                    password: oParams.password
                }
            }).then(res => resolve(res)).catch(error => this.loggerService.log(error.errmsg, LogStatus.ERROR));
        });
    }

    public getCustomerWithName(name: string): Promise<Customer> {
        console.log(name, "EMAIL EMAIL EMAIL ");
        
        return new Promise<Customer>((resolve, reject) => {
            Customer.sequelize.query('SELECT id , name , company FROM "Customer" WHERE name=' + "'" + name + "'", {type: sequelize.QueryTypes.SELECT})
            .then((res) => resolve(res[0]))
            .catch(error => reject(this.loggerService.log(error.errmsg, LogStatus.ERROR)));
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
