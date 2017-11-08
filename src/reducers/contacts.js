import _ from 'underscore';

// ideally I would have a more sophisticated method of generating
// ids, such as using a random number generator, but for now I 
// am just incrementing ids
let id = 0;

// this is a reducer that handles state related to 
// the list of contacts
const contacts = (state = [], action) => {
    switch (action.type) {

        // inputs in the action are the type and the contact, with the id
        // being automatically generated
        case 'CONTACT_ADD':
            let contact = Object.assign({}, action.contact);
            contact.id = id;
            id++;
            return [ ...state, contact];

        // inputs in the action are the type and the contact id, which is
        // used to query the list of contacts
        case 'CONTACT_DELETE':
            var contacts = Object.assign({}, state);
            var contact_index = _.findIndex(contacts, contact => contact.id === id);
            contacts.splice(contact_index, 1);
            return contacts;

        // inputs in the action are the type and the contact id, which is
        // used to query the list of contacts
        case 'CONTACT_UPDATE':
            var contacts = Object.assign({}, state);
            var contact_index = _.findIndex(contacts, contact => contact.id === action.contact.id);
            contacts.splice(contact_index, 1, action.contact);
            return contacts;

        default:
            return state;
    }
}

export default contacts;