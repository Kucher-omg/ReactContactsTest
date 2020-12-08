import { NavLink } from 'react-router-dom';
import style from './Contacts.module.css';


const Contact = (props) => {
    //props.card
    let {name, phone, email, id, isFavourite} = props.card;
    let changeFav = (id, bool) => {
        props.isFavourite(id, bool);
        let items = JSON.parse(localStorage.getItem('contacts'));
        localStorage.setItem('contacts', JSON.stringify(items.map(item => {
            if(item.id === id){
                item.isFavourite = bool;
                
            }
             return item
        })));
    }
    let deleteItem = (id) => {
        props.deleteCard(id);
        let items = JSON.parse(localStorage.getItem('contacts'));
        localStorage.setItem('contacts', JSON.stringify(items.filter(item => item.id !== id)));
    }
    let editCard = () => {
        props.editId(props.card);
    }
    return(
        <div key={id} className={style.contact}>
            <div className={style.name}>
                {name}
                <span onClick={() => deleteItem(id)} className={style.delete}>X</span>
            </div>
            <div className={style.phone}>{phone}</div>
            <div className={style.email}>{email}</div>
           <input onClick={() => changeFav(id, !isFavourite)} checked={isFavourite} type="checkbox"/>
           <NavLink to='/edit'>
                <input onClick={() => editCard()} type="button" value='edit card'/>
           </NavLink>
        </div>
    );
}


export default Contact;