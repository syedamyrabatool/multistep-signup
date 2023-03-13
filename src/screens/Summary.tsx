import React from 'react';
import '../App.scss';

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country: string;
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    onSubmit: (e: any) => void;
    onReview: () => void;
}
const Summary = (props: UserDetails) : React.ReactElement => {

  return (
    <div className='form-container'>
        <span className='heading-1'>Summary</span>
        <div className='summary-tab'>
          <p><span>{props.firstNameLabel}:</span><span>{props.firstName}</span></p>
          <p><span>{props.lastNameLabel}:</span><span>{props.lastName}</span></p>
          <p><span>{props.emailLabel}:</span><span>{props.mobile}</span></p>
          <p><span>{props.phoneLabel}:</span><span>{props.mobile}</span></p>
          <p><span>Country:</span><span>{props.country}</span></p>
          <button onClick={() => props.onReview()}>Review</button> 
          <button onClick={(e: any) => props.onSubmit(e)}>Submit</button>
        </div>
    </div>
  );
}

export default Summary;
