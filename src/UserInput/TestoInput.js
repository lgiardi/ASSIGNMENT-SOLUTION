import React from 'react';

const testoInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changedtesto} 
        value={props.testo} maxlength="70"/>;
};

export default testoInput;