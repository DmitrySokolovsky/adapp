export abstract class ITopicRepo {
    public abstract addTopic(id: number, name: string): Promise<any>;
}
