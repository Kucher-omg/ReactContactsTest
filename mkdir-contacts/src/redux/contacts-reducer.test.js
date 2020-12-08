const  { createCardAC, isFavouriteAC, editIdAC, editCardAC, deleteCardAC, default: ContactsPage } = require("./contacts-reducer");

const initial = {
    cards: [],
    editId: 0
}

//CREATE_CARD
test('nazva', () => { 
    let card = {
        id: '29-kef9k',
        name: 'Alice',
        phone: '23908328934'
    };
    let action = createCardAC(card);
    let result =  ContactsPage(initial, action);
    expect(result.cards.length).toBe(1);
});

test('isFavourite action creator', () => {
    let card = {
        id: '29-kef9k',
        name: 'Alice',
        phone: '23908328934',
        isFavourite: false
    };
    let action = createCardAC(card);
    let initial2 = ContactsPage(initial, action);

    let action2 = isFavouriteAC('29-kef9k', true);
    let result = ContactsPage(initial2, action2);
    expect(result.cards[0].isFavourite).toBeTruthy;
});

test('editCard action creator', () => {
    let card = {
        id: '29-kef9k',
        name: 'Alice',
        phone: '23908328934',
        isFavourite: false
    };
    let editedCard = {
        id: '29-kef9k',
        name: 'Rey',
        phone: '23908328934',
        isFavourite: false
    };
    let action = createCardAC(card);
    let initial2 = ContactsPage(initial, action);
    
    let action2 = editIdAC(card);
    let initial3 = ContactsPage(initial2, action2);

    let action3 = editCardAC(editedCard);
    let initialResult = ContactsPage(initial3, action3);

    expect(initialResult.editId).toBe(card);
    expect(initialResult.cards[0].name).toBe('Rey');
});

test('delete action creator', () => {
    let card = {
        id: '29-kef9k',
        name: 'Alice',
        phone: '23908328934',
        isFavourite: false
    };
    let card2 = {
        id: '29-dhf9k',
        name: 'Didi',
        phone: '23908328934',
        isFavourite: false
    };
    let action = createCardAC(card);
    ContactsPage(initial, action);
    let action2 = createCardAC(card2);

    let initial2 = ContactsPage(initial, action2);

    let action3 = deleteCardAC('29-kef9k');
    let result = ContactsPage(initial2, action3);
    expect(result.cards.length).toBe(1);
});