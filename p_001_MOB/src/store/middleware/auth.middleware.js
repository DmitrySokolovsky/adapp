import { 
    LOG_IN,
    SET_USER_TOKEN,
    AUTH
} from '../actions';
import { AuthService } from '../../services';

const authMiddleWare = store => next => action => {
    if (action.type == LOG_IN) {
        let userCreds = action.payload;
        AuthService.getToken(userCreds)
            .then((response) => {
                if(response) {
                    console.log(response.token);
                    store.dispatch({
                        type: SET_USER_TOKEN,
                        payload: response.token
                    });
                }
            });
    }

    if (action.type == SET_USER_TOKEN) {
        const appStore = store.getState().storage.storage;
        const appStore1 = store.getState().nav.navRouter;
        console.log(appStore1, "MIDDLE")
        appStore.save({
            key: 'token',
            data: action.payload,
            expires: 1000 * 3600
        });
    }

    if (action.type == AUTH) {
        const appStore = store.getState().storage.storage;
        console.log(appStore, "MIDDLE")
        appStore.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true
        }).then(ret => {
            console.log(ret);
        });
    }

    return next(action);
}

export default authMiddleWare;