export class OrderEntity {
    public productName: string;
    public customerName: string;
    public productCount: number;
    public price: number;

    constructor(entity: any) {
        this.productName = entity.p_name || '';
        this.customerName = entity.c_name || '';
        this.productCount = entity.count || 0;
        this.price = entity.price || 0;
    }
}
