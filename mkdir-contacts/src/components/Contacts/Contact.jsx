import style from './Contacts.module.css';


const Contact = (props) => {
    //props.card
    let {name, phone, email, id, isFavourite} = props.card;
    return(
        <div key={id} className={style.contact}>
            <div className={style.name}>{name}</div>
            <div className={style.phone}>{phone}</div>
            <div className={style.email}>{email}</div>
           <input checked={isFavourite} type="checkbox"/>
           <input type="button" value='edit card'/>
        </div>
    );
}


export default Contact;