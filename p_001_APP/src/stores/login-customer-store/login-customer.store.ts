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

    @observable public customerData: CustomerAddModel | null = null;

    @action public setCustomerLogInEmail(email: string): void {
        this.customerCreds.email = email;
    }

    @action public setCustomerLogInPassword(password: string): void {
        this.customerCreds.password = password;
    }

    @action public login(): Promise<void> {
        return this.loginRepository.getToken(this.customerCreds)
            .then((response) => {
                if (response) {
                    localStorage.setItem('userCredsToken', response.token);
                }
            }
        ).catch(err => console.log(err));
    }

    @action public setCustomerData(): void {
        const token = localStorage.getItem('userCredsToken');

        if(token) {
            this.loginRepository.getCustomerDataWithToken(token)
                .then((response) => {
                    this.customerData = response;
                }
            );
        }
    }
}
