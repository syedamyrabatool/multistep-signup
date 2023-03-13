import * as React from "react";

export interface textFieldProps {
   value: string;
   tooltip: string;
   id: string;
   label: string;
   type?: string;
   setTextFieldValue: (e: any) => void;
}

const TextField = (props: textFieldProps): JSX.Element => {
    const [value, setValue] = React.useState(props.value || '');
    const handleChange = (e: any) => {
        setValue(e.target.value);
        props.setTextFieldValue(e);
    };
    return (
        <div className="form-input">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                id = {props.id}
                name = {props.id}
                value = {value}
                className = "textfield"
                type = {props.type ?? 'textbox'}
                placeholder = {props.tooltip}
                onChange={(e) => {handleChange(e)}}
            ></input>
        </div>
    );

};

export default TextField;