import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Category } from './category-models.model';

@Table({
    timestamps: true
})
export class Topic extends Model<Topic> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @ForeignKey(() => Category)
    @Column
    public category_id: number;

    @Column
    public name: string;
}

export abstract class TopicModel {
    public category_id: number;
    public name: string;
    public id?: number;
}
