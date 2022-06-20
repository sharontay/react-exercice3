import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import { TYPES } from '../../../models/types';

const ContactForm = ({ add }) => {

    const nameRef = useRef('')
    const surnameRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const typeRef = useRef('')

    function createContact(e) {
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            phoneRef.current.value,
            emailRef.current.value,
            typeRef.current.value
        )

        add(newContact)
    }

    return (
        <div>
            <form onSubmit={ createContact }>
                <input className='form-control' placeholder='Name' ref={ nameRef } />
                <input className='form-control' placeholder='Surname' ref={ surnameRef } />
                <input className='form-control' placeholder='Phone' ref={ phoneRef } />
                <input className='form-control' placeholder='Email' ref={ emailRef } />
                <label className='form-label'>Select a type:</label>
                <select className='form-select' ref={ typeRef }>
                    <option value={ TYPES.I }>{ TYPES.I }</option>
                    <option value={ TYPES.FAMILY }>{ TYPES.FAMILY }</option>
                    <option value={ TYPES.FRIEND }>{ TYPES.FRIEND }</option>
                    <option value={ TYPES.PARTNER }>{ TYPES.PARTNER }</option>
                </select>
                <button type='submit' className='btn btn-primary'>
                    Add
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
