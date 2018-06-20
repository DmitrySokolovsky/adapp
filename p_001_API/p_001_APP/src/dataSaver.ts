export abstract class IDataSaver {
    public abstract getData(key: string): string|null;
    public abstract setData(key: string, value: string): void;
}