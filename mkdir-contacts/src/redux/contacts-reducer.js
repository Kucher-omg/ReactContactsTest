
const CREATE_CARD = 'CREATE-CARD';
const DELETE_CARD = 'DELETE-CARD';
const SET_FAV = 'SET-FAV';
const EDIT_CARD = 'EDIT-CARD';
const ADD_EDIT_ID = 'ADD-EDIT-ID';

const initial = {
    cards: [],
    editId: 0
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
                        elem.isFavourite = action.bool;
                        return elem;
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
        case ADD_EDIT_ID: {
            return{
                ...state,
                editId: action.id
            }
        }
        case DELETE_CARD:{
            debugger;
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.cardId)
            }
        }
        default: {
            return state
        }
    }
}

export const createCardAC = (card) => ({ type: CREATE_CARD, card });
export const deleteCardAC = (cardId) => ({ type: DELETE_CARD, cardId });

export const isFavouriteAC = (id, bool) => ({ type: SET_FAV, id, bool });
export const editCardAC = (id, editedCard) => ({ type: EDIT_CARD, id, editedCard });
export const editIdAC = (id) => ({ type: ADD_EDIT_ID, id });


export default ContactsPage;