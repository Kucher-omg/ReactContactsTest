import CreateContact from "./CreateContact";
import style from './Contacts.module.css';
import Contact from "./Contact";

const Contacts = (props) => {
    // debugger
    let arrayOfContacts = props.cards.map( elem => {
        return <div className={style.contactsList}>
            <Contact editId={props.editId} isFavourite={props.isFavourite} deleteCard={props.deleteCard} card={elem} />
        </div>
    })
    return (
        <div className={style.contacts}>
            <div className={style.formCreate}>
                <CreateContact {...props} />
            </div>
                {arrayOfContacts}
        </div>
    );
}


export default Contacts;