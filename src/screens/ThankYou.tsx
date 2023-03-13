import React from 'react';
import '../App.scss';

const ThankYou = () : React.ReactElement => {
  return (
    <>
      <span className='heading-1'>Thank you!</span>
      <div>
        <p>An Email has been sent to you with username and password.</p>
        <p>Login with the details here &gt; <a href="#login">Login</a> within 24 hours.</p>
        <p>If you have not received the email please contact the site administrator.</p>

      </div>
    </>
  );
}

export default ThankYou;
