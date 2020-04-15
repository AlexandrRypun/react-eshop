import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...rest }) => (
    <button className={`custom-button ${inverted ? 'inverted' : ''}`} {...rest}>
        {children}
    </button>
);

export default CustomButton;
