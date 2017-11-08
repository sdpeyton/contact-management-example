// basic CRUD actions

export const add_contact = contact => (
    { type: 'CONTACT_ADD', contact }
);

export const remove_contact = contact => (
    { type: 'CONTACT_DELETE', id }
);

export const update_contact = contact => (
    { type: 'CONTACT_UPDATE', id, contact }
);