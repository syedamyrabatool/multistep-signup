import React from 'react';
import '../App.scss';
import TextField from '../components/textField';

export interface IPersonalDetails {
    firstName: string;
    lastName: string;
    firstNameLabel: string;
    lastNameLabel: string;
    //onPrevious: (e: any) => void;
    //onNext: () => void;
    onChange: (e: any) => void;
}
const PersonalDetails = (props: IPersonalDetails) : React.ReactElement => {
    return (
        <div className='personal-details'>
            <TextField 
                label={props.firstNameLabel}
                id="firstName" 
                tooltip='Enter First Name' 
                value={props.firstName} 
                setTextFieldValue= {props.onChange}/>
            <TextField 
                label={props.lastNameLabel} 
                id="lastName" 
                tooltip='Enter Last Name' 
                value={props.lastName}
                setTextFieldValue= {props.onChange} />
            
        </div>
    );
}

export default PersonalDetails;
