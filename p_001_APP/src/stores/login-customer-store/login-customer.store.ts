import { observable, action } from 'mobx';
import { inject } from '../../services/services-regestration';
import { ILoginPepo, INavigationService } from '../../services';
import { CustomerLoginModel, CustomerAddModel } from '../../models';

export class LoginStore {
    @inject(ILoginPepo) public loginRepository: ILoginPepo;
    @inject(INavigationService) public navService: INavigationService;

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
            .then((response) => {
                console.log(response);
                if (response) {
                    console.log(response);
                    this.customerData = response;
                }
            }
        );
    }
}
