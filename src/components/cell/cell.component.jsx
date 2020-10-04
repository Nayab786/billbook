import React from 'react';

function Cell(props){
    const scope = props.scope||'';
    const value = props.value||'';
    return (
        <th contentEditable={true} scope={scope}>{value}</th>
    )
}

export default Cell;