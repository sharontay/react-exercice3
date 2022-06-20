import React from 'react';
import { TYPES } from '../../models/types';

const ContactComponent = ({ contact, show, remove, connect }) => {

    const noShow = () => (
        <div>
            <h3 className='card-title text-center my-3'>{contact.name}</h3>
            <h6
                className='card-subtitle text-end mt-3 mx-2'
                style={ {cursor: 'pointer'} }
                onClick={() => connect(contact)}>
                {connectContact()}
            </h6>
            <div className='card-footer d-flex justify-content-evenly'>
                <button className='btn btn-primary' onClick={ () => show(contact) }>
                    Show
                </button>
                <button className='btn btn-danger' onClick={() => remove(contact)}>
                    Delete
                </button>
            </div>
        </div>
    )

    const onShow = () => (
        <div>
            <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h4 className='card-title'>{contact.name} {contact.surname}</h4>
                    {contactType()}
                </div>
                <h5 className='card-subtitle' style={ {fontSize: '0.9rem'} }>{contact.phone}</h5>
                <h5 className='card-subtitle' style={ {fontSize: '0.9rem'} }>{contact.email}</h5>
                <h6 className='card-subtitle text-end mt-3'
                    style={ {cursor: 'pointer'} }
                    onClick={() => connect(contact)}>
                    {connectContact()}
                </h6>
            </div>
            <div className='card-footer d-flex justify-content-center'>
                <button className='btn btn-outline-primary' onClick={ () => show(contact) }>
                    <i className="bi bi-arrow-return-left"></i>
                </button>
            </div>
        </div>
    )

    const contactType = () => {
        switch(contact.type) {
            case TYPES.I:
                return (
                    <span className='badge bg-success'>{contact.type}</span>
                )

            case TYPES.FAMILY:
                 return (
                    <span className='badge bg-primary'>{contact.type}</span>
                )

            case TYPES.FRIEND:
                return (
                    <span className='badge bg-info'>{contact.type}</span>
                )
            
            case TYPES.PARTNER:
                return (
                    <span className='badge bg-secondary'>{contact.type}</span>
                )

            default:
                return (
                    <span className='badge bg-success'>{contact.type}</span>
                )
        }
    }

    const connectContact = () => {
        if(contact.connected) {
            return (
                <span className='text-success'>
                    <i className='bi bi-circle-fill'> </i>
                    Connected
                </span>
            )
        } else {
            return (
                <span className='text-danger'>
                    <i className='bi bi-circle'> </i>
                    Disconnected
                </span>
            )
        }
    }

    return (
        <div className='card col-5'>
            {contact.onShow ?
            onShow()
            :
            noShow()}
        </div>
    );
}

export default ContactComponent;
