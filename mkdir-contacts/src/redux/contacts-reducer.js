
const CREATE_CARD = 'CREATE-CARD';
const SET_FAV = 'SET-FAV';
const EDIT_CARD = 'EDIT-CARD';

const initial = {
    cards: []
}

const ContactsPage = (state = initial, action) => {
    switch (action.type) {
        case CREATE_CARD: {
            return {
                ...state,
                cards: [action.card, ...state.cards]
            }
        }
        case SET_FAV: {
            return {
                ...state,
                cards: state.cards.map((elem, index) => {
                    if (elem.id === action.id) {
                        return { ...elem[index], isFavourite: action.bool }
                    }
                    else return elem;
                })
            }
        }
        case EDIT_CARD: {
            return {
                ...state,
                cards: state.cards.map((elem, index) => {
                    if (elem.id === action.id) {
                        return action.editedCard
                    }
                    else return elem;
                })
            }
        }
        default: {
            return state
        }
    }
}

export const createCardAC = (card) => ({ type: CREATE_CARD, card });
export const isFavouriteAC = (id, bool) => ({ type: SET_FAV, id, bool });
export const editCardAC = (id, editedCard) => ({ type: EDIT_CARD, id, editedCard });


export default ContactsPage;