import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ContactViewPage.css';
import { update_contact, remove_contact } from '../../../actions/contact-actions';
import _ from 'underscore';

const mapStateToProps = (state, props) => {
    let contact = _.find(state.contacts, contact => contact.id == props.id.match.params.id) || {};
    return { contact };
}

const save_contact = contact => update_contact(contact);
const delete_contact = id => remove_contact(id);

const mapDispatchToProps = dispatch => {
    return {
        save_contact: contact => dispatch(save_contact(contact)),
        delete_contact: id => dispatch(delete_contact(id))
    }
}

class ContactViewPagePresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: this.props.contact
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, key) {
        let value = event.target.value;
        let contact = this.state.contact;
        contact[key] = value;
        this.setState({ contact });
    }

    render() {
        return (
            <div id='contact-view-page'>
                <div className='contact-view-option'>
                    <h3>First Name</h3>
                    <input
                        type='text'
                        value={this.state.contact.first_name}
                        onChange={event => this.onChange(event, 'first_name')}
                    />
                </div>
                <div className='contact-view-option'>
                    <h3>Last Name</h3>
                    <input 
                        type='text'
                        value={this.state.contact.last_name}
                        onChange={event => this.onChange(event, 'last_name')}
                    />
                </div>
                <div className='contact-view-option'>
                    <h3>Email</h3>
                    <input 
                        type='text'
                        value={this.state.contact.email}
                        onChange={event => this.onChange(event, 'email')}
                    />
                </div>
                <div className='contact-view-option'>
                    <h3>Phone</h3>
                    <input 
                        type='text'
                        value={this.state.contact.phone}
                        onChange={event => this.onChange(event, 'phone')}
                    />
                </div>
                <div className='contact-view-option'>
                    <Link to='/contacts'>
                        <button 
                            id='contact-save'
                            className='contact-view-button'
                            onClick={() => this.props.save_contact(this.state.contact)}
                        >
                            Save
                        </button>
                    </Link>
                    <Link to='/contacts'>
                        <button
                            id='contact-delete'
                            className='contact-view-button'
                            onClick={() => this.props.delete_contact(this.state.contact.id)}
                        >
                            Remove
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
            
};

// ContactViewPagePresentation.propTypes = {
//     contact: PropTypes.object
// }

const ContactViewPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactViewPagePresentation);

export default ContactViewPage;