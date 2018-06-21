export abstract class CustomerAddModel {
    public name: string;
    public company: string;
    public phone: string;
    public email: string;
    public password: string;
}

export abstract class CustomerLoginModel {
    public email: string;
    public password: string;
}