import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';

import './ContactList.css';
import { sort_contacts } from '../../../actions/contact-actions';
import Contact from '../contact/Contact';

// this list of sorting options should come from an api endpoint
// or a config file, but I'm hardcoding it here to save time
const sort_options = [
    { name: 'Id', value: 'id' },
    { name: 'First Name', value: 'first_name' },
    { name: 'Last Name', value: 'last_name' },
    { name: 'Email', value: 'email' }
];
const sort_by = event => sort_contacts(event.target.value);

const mapStateToProps = state => ({ contacts: state.contacts });
const mapDispatchToProps = dispatch => ({ sort_by: event => dispatch(sort_by(event)) });

const ContactListPresentation = ({ contacts, sort_by }) => (
    <div id='contact-list'>
        <div id='contact-sort'>
            <p>Sort Contacts</p>
            <select onChange={event => sort_by(event)}>
                {
                    sort_options.map(option => {
                        return <option value={option.value}>{option.name}</option>
                    })
                }
            </select>
        </div>
        <div id='contact-list-header'>
            <p className='id'>Id</p>
            <p className='first-name'>First Name</p>
            <p className='last-name'>Last Name</p>
            <p className='email'>Email</p>
            <p className='phone'>Phone</p>
        </div>
        {
            contacts.map(contact => {
                return <Contact contact={contact} />
            })
        }
    </div>
);

ContactListPresentation.propTypes = {
    contacts: PropTypes.array.isRequired,
    sort_by: PropTypes.func
}

const ContactList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListPresentation);

export default ContactList;