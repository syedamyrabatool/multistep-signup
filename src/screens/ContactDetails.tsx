import React from 'react';
import '../App.scss';
import TextField from '../components/textField';

export interface IContactDetails {
    email: string;
    mobile: string;
    emailLabel: string;
    phoneLabel: string;
    onChange: (e: any) => void;
}
const ContactDetails = (props: IContactDetails) : React.ReactElement => {
    return (
        <div className='contact-details'>
            <TextField 
                label={props.emailLabel} 
                id="email" 
                tooltip='Enter Email' 
                value={props.email} 
                setTextFieldValue={props.onChange}/>
            <TextField 
                label={props.phoneLabel} 
                type='number' 
                id="mobile" 
                tooltip='Enter Phone' 
                value={props.mobile} 
                setTextFieldValue={props.onChange}/>
        </div>
    );
}

export default ContactDetails;
