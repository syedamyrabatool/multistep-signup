import * as React from "react";

export interface selectProps {
    options: string[];
    value: string;
    tooltip: string;
    id: string;
    label: string;
    type?: string;
    setValue: (e: any) => void;
}

const SelectBox = (props: selectProps): JSX.Element => {
    const [value, setValue] = React.useState(props.value || '');
    const handleChange = (e: any) => {
        setValue(e.target.value);
        props.setValue(e);
    };
    return (
        <div className="form-input">
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} name={props.id} value={value} onChange={(e) => handleChange(e)}> 
                <option value="null" selected disabled>Choose one...</option>
                    {props.options.map((option) => {
                        return (
                            value === option ? 
                                <option value={option} selected={true}>{option}</option>
                                : <option value={option}>{option}</option>
                        )
                    })}
                </select>
        </div>
    );

};

export default SelectBox;