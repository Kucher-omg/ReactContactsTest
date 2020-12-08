import { connect } from "react-redux"
import { editCardAC, createCardAC, isFavouriteAC, deleteCardAC, editIdAC } from "../../redux/contacts-reducer";
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
    return {
        cards: state.contacts.cards
    }
}

export default connect(mapStateToProps, {
    editCard: editCardAC,
    createCard: createCardAC,
    isFavourite: isFavouriteAC,
    deleteCard: deleteCardAC,
    editId: editIdAC
})(Contacts);