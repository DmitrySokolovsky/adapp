import { Topic } from '../../models';

export abstract class ITopicRepo {
    public abstract addTopic(id: number, name: string): Promise<any>;
    public abstract getTopicsById(id: number | string): Promise<Topic[]>;
}
