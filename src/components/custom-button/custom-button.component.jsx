import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    /* if googlesignin(its a prop we name) is true, then add class google sign in, if not do not add
    and always add custom button class
     */
    <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : "" } custom-button`} {...otherProps}> {/* we put other props so it would replace the tags in input submit in sign in component */}
        {children} {/* anything between button tags will be considered children, so instead of
        hard coding it, we wrote children with curly braces */}
    </button>
)

export default CustomButton;