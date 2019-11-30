import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>{ /* we call on change as handleChange in here */}
        {    
            label ?  /* if we want to create a label it creates a label, if not null(doesnt create) */
            (<label
                className={`${
                    otherProps.value.length ? "shrink" : ""  
                    /* shrink class is for email and password to shrink up and down, transitioned */
                    /* if a user typed in something, then apply shrink value, if not, nothing */
                } form-input-label`} /* In any case, apply form input label */
            >
            {label}
            </label>)
            : null
        }
    </div>

)

export default FormInput;