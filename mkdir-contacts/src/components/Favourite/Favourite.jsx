import style from './Favourite.module.css';


const Favourite = (props) => {

    let favContacts = props.cards.map(contact => {
        if (contact.isFavourite === true) {
            let { name, phone, email, id, isFavourite } = contact;
            return (
                <div key={id} className={style.contact}>
                    <div className={style.name}>
                        {name} 
                    </div>
                    <div className={style.phone}>{phone}</div>
                    <div className={style.email}>{email}</div>
                </div>
            )
        }
    })
    return (
        <div>
            <div>
                Your`s favourite contacts 
            </div>
            {favContacts}
        </div>

    )

}


export default Favourite;