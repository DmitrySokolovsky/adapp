import { 
    LOG_IN,
    SET_USER_DATA
} from '../actions';
import { AuthService } from '../../services';
import { AsyncStorage } from 'react-native';

const authMiddleWare = store => next => action => {
    if (action.type == LOG_IN) {
        let userCreds = action.payload;
        AuthService.getToken(userCreds)
            .then((response) => {
                if(response) {
                    setToAsyncStorage(response.data);
                }
            });
    }

    return next(action);
}

async function setToAsyncStorage(params) {
    try {
        await AsyncStorage.setItem("tocken", params);
    } catch(err) {
        console.log(err);
    }
}

export default authMiddleWare