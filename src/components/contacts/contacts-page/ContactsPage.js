import React, { Component } from 'react';
import './ContactsPage.css';

import ContactList from '../contact-list/ContactList';

const ContactsPage = () => (
    <div id='contacts-page'>
        <p id='contacts-title'>Contacts Administation</p>
        <ContactList />
    </div>
);

export default ContactsPage;