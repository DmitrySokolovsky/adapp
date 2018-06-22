import { observable, action } from 'mobx';
import { inject } from '../../services/services-regestration';
import { ILoginPepo } from '../../services';
import { CustomerLoginModel, CustomerAddModel } from '../../models';

export class LoginStore {
    @inject(ILoginPepo) public loginRepository: ILoginPepo;

    @observable public customerCreds: CustomerLoginModel = {
        email: '',
        password: ''
    }

    @observable public customerData: CustomerAddModel | null = null

    @action public setCustomerLogInEmail(email: string): void {
        this.customerCreds.email = email;
    }

    @action public setCustomerLogInPassword(password: string): void {
        this.customerCreds.password = password;
    }

    @action public login(): void {
        this.loginRepository.loginCheck(this.customerCreds)
            .then((response: CustomerAddModel) => {
                if (response) {
                    this.customerData = response;
                }
            }
        );
    }
}
