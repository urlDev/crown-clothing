import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}> {/* we put other props so it would replace the tags in input submit in sign in component */}
        {children} {/* anything between button tags will be considered children, so instead of
        hard coding it, we wrote children with curly braces */}
    </button>
)

export default CustomButton;