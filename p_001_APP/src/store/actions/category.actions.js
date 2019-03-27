import { CategoryService } from '../../services';
import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR } from './category.action-types';

const oCategoryService = new CategoryService();

export function getCategories() {
    return (dispatch) => {
        oCategoryService.getCategories()
        .then(result => dispatch(getCategoriesSuccess(result)))
        .then(result => dispatch(getCategoriesError(result)))
    }
}

function getCategoriesSuccess(categories) {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

function getCategoriesError(categories) {
    return {
        type: GET_CATEGORIES_ERROR
    }
}