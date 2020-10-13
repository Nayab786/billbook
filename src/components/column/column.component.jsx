import React from 'react';
import './column.style.css';

function Column(props) {
    console.log("colmn", props)
    const {
        col_id: id,
        col_position: position,
        col_name: name,
        col_label: label
    } = props;
    let width = props.width;
    width = props.cw > 60 ? `100%` : `${(100 / 60) * props.width}%`;
    return (
        <th className="column" scope="col" id={id} width={width}>{label}</th>
    )
}

export default Column;