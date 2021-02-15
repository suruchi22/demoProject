import React from 'react';

function inputType(props) {

    return (
    <form>
    <input type={props.type}  placeholder={props.placeholder} name={props.name} onChange={props.changed} 
    selected={props.isSelected} onClick={props.clicked}/>
    </form>);

}

export default inputType;