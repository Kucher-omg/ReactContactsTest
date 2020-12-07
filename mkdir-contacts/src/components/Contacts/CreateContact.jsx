import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';


const CreateContact = (props) => {
   
    useEffect(()=>{
        let items = JSON.parse(localStorage.getItem('contacts'));
        if(items){
            items.forEach((item, index) => {
                props.createCard(items[index]);
            });
            
        }
    },[]);

    let onSubmit = (value) => {
        let id = `f${(~~(Math.random()*1e8)).toString(16)}`;
        value.id = id;
        if(!value.isFavourite) value.isFavourite = false;
        let fullCard = value;
        localStorage.setItem('contacts', JSON.stringify([...props.cards, fullCard]));
        props.createCard(fullCard);
       
    }
    return (
        <div>
            <ContactForm onSubmit={onSubmit} />
        </div>
    );
}

let ContactForm = props => {
    const { handleSubmit, reset } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <Field name="phone" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="fav">Favourite</label>
                <Field name="isFavourite" component="input" type="checkbox"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)


export default CreateContact;