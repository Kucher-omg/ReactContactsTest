import { connect } from 'react-redux';
import { isFavouriteAC } from '../../redux/contacts-reducer';
import Favourite from './Favourite';

const mapStateToProps = (state) => {
        return {
                cards: state.contacts.cards
        }
}

export default connect(mapStateToProps, {
        
})(Favourite);