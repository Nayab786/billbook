import React from 'react';
import ReactDOM from 'react-dom';

function Column(props){
    console.log("colmn", props)
    const id = props.id || '';
    const width = props.cw>60?`100%`:`${(100/60)*props.width}%`;
    const displayNamne = props.display_name;
    return(
        <th scope="col" id={id} width={width}>{displayNamne}</th>
    )
}

export default Column;