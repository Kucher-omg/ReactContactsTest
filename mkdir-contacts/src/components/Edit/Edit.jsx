import style from './Edit.module.css';
import { reset, Field, reduxForm } from 'redux-form';

const Edit = (props) => {
    // props.editId
    // debugger
    return (
        <div className={style.contacts}>
            <EditForm {...props}/>
        </div>
    );
}


let EditForm = props => {
    debugger
    const { handleSubmit} = props;
    const {name, phone, email, isFavourite } = props.editId;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" placeholder={name}>
             
                </Field>
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
                <Field name="isFavourite" component="input" type="checkbox" checked={"isFavourite"}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

EditForm = reduxForm({
    form: 'editContact'
})(EditForm)


export default Edit;