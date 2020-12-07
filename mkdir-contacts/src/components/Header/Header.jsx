import style from './Header.module.css';

const { NavLink } = require("react-router-dom");


const Header = (props) => {
    return (
        <div className={style.header}>

            <div className={style.forNavLink}>
                <NavLink to='/contacts' className={style.navLink} activeClassName={style.activeNavLink}>
                    Contacts+create
                </NavLink>
                <NavLink to='/favcontacts' className={style.navLink} activeClassName={style.activeNavLink}>
                    Favourite contacts
                </NavLink>
            </div>


        </div>
    );
}










export default Header;