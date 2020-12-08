import { connect } from "react-redux";
import { editCardAC } from "../../redux/contacts-reducer";
import EditComponent from "./Edit";

const mapStateToProps = state => {
    return {
        editId: state.contacts.editId
    }
}

export default connect(mapStateToProps,{
    editCard: editCardAC

})(EditComponent);
