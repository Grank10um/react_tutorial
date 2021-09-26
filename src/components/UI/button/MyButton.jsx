import React from 'react';
import classes from '/Users/pavelgrankkin/Documents/lessons/react/new_react_app/src/components/UI/button/MyButton.module.css'


const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;