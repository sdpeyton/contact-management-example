import _ from 'underscore';

// ideally I would have a more sophisticated method of generating
// ids, such as using a random number generator, but for now I 
// am just incrementing ids
let id = 0;

// this is a reducer that handles state related to 
// the list of contacts
const contacts = (state = [], action) => {
    switch (action.type) {

        // inputs in the action are the type and a list of contacts, with
        // the id being automatically generated.
        case 'CONTACTS_ADD':
            let contacts = action.contacts.map(contact => {
                let new_contact = Object.assign({}, contact);
                new_contact.id = id;
                id++;
                return new_contact;
            });
            // console.error([...state, ...contacts]);
            return [...state, ...contacts];

        // inputs in the action are the type and the contact, with the id
        // being automatically generated
        case 'CONTACT_ADD':
            var contact = Object.assign({}, action.contact);
            contact.id = id;
            id++;
            return [ ...state, contact];

        // inputs in the action are the type and the contact id, which is
        // used to query the list of contacts
        case 'CONTACT_DELETE':
            var contacts = state.map(contact => Object.assign({}, contact));
            var contact_index = _.findIndex(contacts, contact => contact.id === action.id);
            contacts.splice(contact_index, 1);
            return contacts;

        // inputs in the action are the type and the contact id, which is
        // used to query the list of contacts
        case 'CONTACT_UPDATE':
            var contacts = state.map(contact => Object.assign({}, contact));
            var contact_index = _.findIndex(contacts, contact => contact.id === action.contact.id);
            contacts.splice(contact_index, 1, action.contact);
            return contacts;

        // inputs in the action are the type and the field to sort the list
        // of contacts by
        case 'CONTACTS_SORT':
            return _.sortBy(state, contact => contact[action.sort_by]);

        default:
            return state;
    }
}

export default contacts;