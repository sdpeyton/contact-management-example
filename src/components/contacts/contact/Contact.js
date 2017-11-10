import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Contact.css';

const Contact = ({ contact }) => (
    <Link 
        className='contact-link'
        to={`/contacts/${contact.id}`}
    >
        <div className='contact'>
            <p className='id'>{contact.id}</p>
            <p className='first-name'>{contact.first_name}</p>
            <p className='last-name'>{contact.last_name}</p>
            <p className='email'>{contact.email}</p>
            <p className='phone'>{contact.phone}</p>
        </div>
    </Link>
);

Contact.propTypes = {
    contact: PropTypes.object
};

export default Contact;