import { api_url } from '../config';

const contacts_url = api_url + 'contacts';

export const ContactService = {

    contacts: null,

    get_contacts() {
        return new Promise(resolve => {
            if (this.contacts) { // if contacts already exist, return them
                resolve(this.contacts);
            } else { // otherwise fetch them
                fetch(contacts_url)
                    .then(response => response.json())
                    .then(result => {
                        this.contacts = result;
                        resolve(result);
                    });
            }
        });
    }
}