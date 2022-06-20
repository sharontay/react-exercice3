import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import { TYPES } from '../../models/types';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {

    const initialContacts = [
        new Contact('Sharon', 'Marín', '655035956', 'sharontaymarin@gmail.com', TYPES.I),
        new Contact('Sarah', 'Marín', '654355436', 'sarah@sarah.es', TYPES.FAMILY),
        new Contact('Rebeca', 'Chambers', '670740470', 'rebeca@rebeca.es', TYPES.FRIEND),
        new Contact('Fausto', 'Dábila', '631931309', 'fausto@fausto.com', TYPES.PARTNER)
    ]

    const [contacts, setContacts] = useState(initialContacts)

    function showContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].onShow = !tempContacts[index].onShow
        setContacts(tempContacts)
    }

    function connectContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].connected = !tempContacts[index].connected
        setContacts(tempContacts)
    }
    
    function removeContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    function addContact(contact) {
        const tempContacts = [...contacts, contact]
        setContacts(tempContacts)
    }

    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            {
                contacts.map((contact, index) => 
                    (<ContactComponent
                        contact={ contact }
                        key={ index }
                        show={ showContact }
                        remove={ removeContact }
                        connect={ connectContact }
                        />)
                )
            }
            <ContactForm
                add={ addContact }
                />
        </div>
    );
}

export default ContactList;
