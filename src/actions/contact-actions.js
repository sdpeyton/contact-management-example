import ContactService from '../services/ContactService';

export const load_contacts = () => {
    return dispatch => {
        return ContactService.get_contacts()
            .then(contacts => dispatch(add_contacts(contacts)));
    }
}

export const add_contacts = contacts => (
    { type: 'CONTACTS_ADD', contacts }
);

export const add_contact = contact => (
    { type: 'CONTACT_ADD', contact }
);

export const remove_contact = id => (
    { type: 'CONTACT_DELETE', id }
);

export const update_contact = contact => (
    { type: 'CONTACT_UPDATE', contact }
);