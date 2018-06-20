import { injectable } from "inversify";
import { IDataSaver } from "./dataSaver";

@injectable()
export class LocalSaver implements IDataSaver {
    public getData(key: string): string|null {
        const data: string|null = localStorage.getItem(key);
        return data;
    }

    public setData(key: string, value: string) {
        localStorage.setItem(key, value);
    }
}