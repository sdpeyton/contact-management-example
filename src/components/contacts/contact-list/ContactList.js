import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';

import './ContactList.css';
import { sort_contacts } from '../../../actions/contact-actions';

// this list of sorting options should come from an api endpoint
// or a config file, but I'm hardcoding it here to save time
const sort_options = [
    { name: 'Id', value: 'id' },
    { name: 'First Name', value: 'first_name' },
    { name: 'Last Name', value: 'last_name' },
    { name: 'Email', value: 'email' }, 
    { name: 'Phone Number', value: 'phone_number' }
];
const sort_by = event => {
    console.error(event);
    // return event.target.value;
}

const mapStateToProps = state => ({ contacts: state.contacts, sort_by });
const mapDispatchToProps = dispatch => ({ on_sort_by: dispatch(sort_by) });

const ContactListPresentation = ({ contacts, on_sort_by }) => (
    <div id='contacts-list'>
        <select onChange={event => on_sort_by(event)}>
            {
                sort_options.map(option => {
                    return <option value={option.value}>{option.name}</option>
                })
            }
        </select>
        {
            contacts.map(contact => {
                return <h3>{contact.first_name}</h3>
            })
        }
    </div>
);

ContactListPresentation.propTypes = {
    contacts: PropTypes.array.isRequired,
    sort_by
}

const ContactList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListPresentation);

export default ContactList;