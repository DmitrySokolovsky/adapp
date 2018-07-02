import { observable, action } from 'mobx';
import { inject } from '../../services/services-regestration';
import { ILoginPepo, INavigationService } from '../../services';
import { CustomerModel } from '../../models';

export class LoginStore {
    @inject(ILoginPepo) public loginRepository: ILoginPepo;
    @inject(INavigationService) public navService: INavigationService;

    @observable public customerCreds: CustomerModel = {
        name: '',
        password: ''
    }

    @observable public customerData: CustomerModel | null = null;

    @action public setCustomerLogInName(name: string): void {
        this.customerCreds.name = name;
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
