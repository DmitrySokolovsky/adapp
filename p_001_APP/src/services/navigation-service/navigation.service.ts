import { injectable } from 'inversify';
import { createBrowserHistory, History } from 'history';

import { INavigationService } from './';

@injectable()
export class NavigationService implements INavigationService {
    private history: History;

    public constructor() {
        this.history = createBrowserHistory();
    }

    public getHistory(): History {
        return this.history;
    }

    public navigateTo( url: string ): void {
        this.history.push(url);
    }
}
