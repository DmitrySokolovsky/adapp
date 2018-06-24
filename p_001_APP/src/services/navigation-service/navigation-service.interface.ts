import { History } from 'history';

export abstract class INavigationService {
    public abstract getHistory(): History;
    public abstract navigateTo(url: string): void;
}