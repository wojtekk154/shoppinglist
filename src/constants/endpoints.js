const API_URL = 'http://localhost:1337/api';

export const SIGNIN_URL = `${API_URL}/auth/sign_in`;
export const SIGNUP_URL = `${API_URL}/auth/sign_up`;

export const ADD_LIST_URL = `${API_URL}/list`;
export const GET_USER_LISTS_URL = `${API_URL}/list`;
export const GET_LIST_URL = (id) => `${API_URL}/list/${id}`;
export const REMOVE_LIST_URL =  (id) => `${API_URL}/list/${id}`;

export const ADD_LIST_ITEM_URL =  (listId) =>  `${API_URL}/list/${listId}/listitem/`;
export const REMOVE_LIST_ITEM_URL = (id) => `${API_URL}/listitem/${id}`;
export const GET_LIST_ITEMS_URL = (id) => `${API_URL}/listitem/${id}`;
export const REMOVE_LIST_ITEMS_URL = (id) => `${API_URL}/list/${id}/listitem/`;

//
// export const INDEX_PATH = '/';
// export const SIGN_IN_PATH = '/auth/signin';
// export const SIGN_UP_PATH = '/auth/signup';
// export const USER_DATA_PATH = '/user/info';
//
// export const LIST_INDEX_PATH = '/list';
// export const NEW_LIST_CREATE_PATH = '/list/new';
// export const CURREN_TLIST_PATH = '/current-list';
// export const ADD_PRODUCTS_TO_LIST_PATH = '/lists/:id';