import classNames from 'classnames';
import React from 'react';
import './button.css'

const button = ( {onClick, type, children, size = 's' }) => {

        const btnClass = classNames({
            btn: true,
            "btn--secondary": type === "secondary",
            "btn--primary": type === "primary",
            "btn--small": size === "s",
            "btn--medium": size === "m",
          });


    return (
        <div className={btnClass} onClick={onClick}>
            {children}
        </div>
    );
}
export default button;