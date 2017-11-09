import React, { Component } from 'react';
import './ContactsPage.css';

import ContactList from '../contact-list/ContactList';

const ContactsPage = () => (
    <div id='contacts-page'>
        <h3>Show me some contacts!</h3>
        <ContactList />
    </div>
);

export default ContactsPage;