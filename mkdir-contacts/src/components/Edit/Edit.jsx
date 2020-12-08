import style from './Edit.module.css';
import {Field, reduxForm } from 'redux-form';
import { Redirect,  withRouter, Switch } from "react-router";

import ContactsContainer from '../Contacts/ContactsContainer';

const Edit = (props) => {
    
    let onSubmit = (value) => {
        if(!value.isFavourite) value.isFavourite = false;
        value.id = props.editId.id;
        console.log(value);
        props.editCard(value);
        //LocalStorage changing
        let items = JSON.parse(localStorage.getItem('contacts'));
        localStorage.setItem('contacts', JSON.stringify(items.map(item => {
            if(item.id === value.id){
                return value
            }
             return item
        })));
        props.history.push('/contacts');
    }
    return (
        <div className={style.contacts}>
            <EditForm onSubmit={onSubmit} {...props}/>
        </div>
    );
}


let EditForm = props => {

    const { handleSubmit } = props;
    const {name, phone, email, isFavourite } = props.editId;
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" placeholder={name} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <Field name="phone" component="input" type="text" placeholder={phone}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" placeholder={email} />
            </div>
            <div>
                <label htmlFor="fav">Favourite</label>
                <Field name="isFavourite" component="input" type="checkbox"/>
            </div>
            
                <button type="submit">Submit</button>
        </form>
    );
}


EditForm = reduxForm({
    form: 'editContact'
})(EditForm)


let EditWithRouter = withRouter(Edit);

export default EditWithRouter;