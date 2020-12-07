import { combineReducers, createStore } from "redux";
import ContactsPage from "./contacts-reducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    contacts: ContactsPage,
    form: formReducer
});

const store = createStore(reducers);

export default store;