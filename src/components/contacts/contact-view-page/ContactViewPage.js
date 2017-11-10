import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ContactViewPage.css';
import { sort_contacts } from '../../../actions/contact-actions';
import _ from 'underscore';

const mapStateToProps = (state, props) => {
    let contact = _.find(state.contacts, contact => contact.id == props.id.match.params.id) || {};
    return { contact };
}

const ContactViewPagePresentation = ({ contact }) => (
    <div id='contact-view-page'>
        <div className='contact-view-option'>
            <h3>First Name</h3>
            <input
                type='text'
                value={contact.first_name}
            />
        </div>
        <div className='contact-view-option'>
            <h3>Last Name</h3>
            <input 
                type='text'
                value={contact.last_name}
            />
        </div>
        <div className='contact-view-option'>
            <h3>Email</h3>
            <input 
                type='text'
                value={contact.email}
            />
        </div>
        <div className='contact-view-option'>
            <h3>Phone</h3>
            <input 
                type='text'
                value={contact.phone}
            />
        </div>
        <div className='contact-view-option'>
            <button 
                id='contact-save'
                className='contact-view-button'
            >
                Save
            </button>
            <button
                id='contact-delete'
                className='contact-view-button'
            >
                Delete
            </button>
        </div>
    </div>
);

// ContactViewPagePresentation.propTypes = {
//     contact: PropTypes.object
// }

const ContactViewPage = connect(
    mapStateToProps
)(ContactViewPagePresentation);

export default ContactViewPage;