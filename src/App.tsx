import React, { useState } from 'react';
import './App.scss';
import ThankYou from './screens/ThankYou';
import Summary from './screens/Summary';
import PersonalDetails from './screens/PersonalDetails';
import NotFound from './screens/NotFound';
import ContactDetails from './screens/ContactDetails';
import SecurityDetails from './screens/SecurityDetails';

export interface Isignup {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  country?: string;
}

const App = (props: Isignup) : React.ReactElement => {
  
  const [step, setStep] = useState(1);
  const [screen, setScreen] = useState('form');
  const [progress, setProgress] = useState('progress progress-33');
  const totalSteps = 3;

  const [firstName, setFirstName] = useState(props?.firstName ?? '');
  const [lastName, setLastName] = useState(props?.lastName ?? '');
  const [mobile, setMobile] = useState(props?.mobile ?? '');
  const [email, setEmail] = useState(props?.email ?? '');
  const [country, setCountry] = useState(props?.country ?? '');

  const personalData = {
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    firstName: firstName,
    lastName: lastName

  };
  const contactData = {
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number',
    email: email,
    mobile: mobile
  }
  const securityData = {
    countryLabel: 'Country',
    termsAccepted: true,
    country: country,
  }

  const review = () => {
    setStep(1);
    setScreen('form');
    setProgress('progress progress-33');
  };
  const submit = (e: any) => {
    e.preventDefault();
    setScreen('thank-you');
  };

  const loadPrevious = () => {
    if (step > 1) 
      setStep(step -1);
      setProgress('progress progress-'+ ((step-1)*33));
  };

  const loadNext = () => {
    if (step < totalSteps) {
      setStep(step +1);
      setProgress('progress progress-'+ ((step+1)*33));
    } else if (step === totalSteps){
      setScreen('summary');
    }
  };
 

  const handleChange = (e: any) => {
    switch(e.target.name){
      case 'firstName': 
        setFirstName(e.target.value);
        break;
      case 'lastName': 
        setLastName(e.target.value);
        break;
      case 'mobile': 
        setMobile(e.target.value);
        break;
      case 'email': 
        setEmail(e.target.value);
        break;
      case 'country':
          setCountry(e.target.value);
          break;
      default: 
        break;
    }
  };
  const onActivity = {
    //onNext: loadNext,
    //onPrevious: loadPrevious,
    onChange: handleChange,
  }


  const reviewForm = {
    ...personalData,
    ...contactData,
    ...securityData,
    onReview: review,
    onSubmit: submit
  };
const renderForm = () => {
  switch(step) {
    case 1: return <PersonalDetails {...personalData}  {...onActivity}/>
    case 2: return <ContactDetails {...contactData} {...onActivity}/>
    case 3: return <SecurityDetails {...securityData} {...onActivity}/>
    default:
      return;
  }
};

const renderButtons = () => {
  return (
    <>
      <button onClick={(e) => loadPrevious()} disabled={step === 1 ?? "disabled"}>&laquo; Previous</button> 
      <button onClick={() => loadNext()}>{step < totalSteps ? 'Continue' : 'Proceed'} &raquo;</button>
    </>
  );
};

  return (
    <div className="App">
      <div className='form-container'>
        <header className="App-header">Multi-step SignUp</header>
          {screen === 'form' &&
            <>
              <span className='heading-1'>Sign Up</span>
              <p>Please fill in this form to create an account.</p>
              <span>Step: {step} of {totalSteps}</span>
              <div className='user-details'>
                <div className={progress}></div>
                {renderForm()}
                {renderButtons()}
              </div>
            </>
          }   
          {screen === 'summary' && <Summary {...reviewForm}/>}
          {screen === 'thank-you' &&  <ThankYou/>}
          {screen === '404' && <NotFound/>}
      </div>
    </div>
  );
}

export default App;
