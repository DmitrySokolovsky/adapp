import { 
    LOG_IN,
    SET_USER_DATA
} from '../actions';

import axios from 'axios';

const authMiddleWare = store => next => action => {
    if (action.type === LOG_IN) {
        axios.post();
    }
}

