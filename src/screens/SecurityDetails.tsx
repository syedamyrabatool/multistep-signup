import React from 'react';
import '../App.scss';
import SelectBox from '../components/selectbox';

export interface ISecurityDetails {
    termsAccepted: boolean;
    country: string;
    countryLabel: string;
    onChange: (e:any) => void;
}

const countries = ['Australia', 'Canada','USA'];
const SecurityDetails = (props: ISecurityDetails) : React.ReactElement => {

    return (
        <div className='security-details'>
            <SelectBox 
                tooltip='Select' 
                id='country' 
                value={props.country}
                setValue={((e) => props.onChange(e))}
                label={props.countryLabel} 
                options={countries}></SelectBox>            
             <div className="form-input">
                <input type="checkbox" id="privacy" checked={props.termsAccepted} className='checkbox' />
                <p>Accept Terms and Conditions to proceed <a href='#privacy'>Read Privacy Notes</a></p>
            </div>
        </div>
    );
}

export default SecurityDetails;
