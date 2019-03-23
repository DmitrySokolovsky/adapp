import { Category } from '../../models';

export abstract class ICategoryRepo {
    public abstract getCategories(): Promise<Category[]>;
}
