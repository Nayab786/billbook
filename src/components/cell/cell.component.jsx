import React from 'react';
import './cell.style.css';

function Cell(props){
    const value = props.value||'';
    return (
    <td className="cell">
        <div contentEditable="true">{value}</div>
    </td>
    )
}

export default Cell;