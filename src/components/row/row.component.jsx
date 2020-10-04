import React from 'react';

import Cell from '../cell/cell.component';

function Row(props){
    const cells = props.cells;
    return(
        <tr>
            {
                cells.map((cell,index)=>{
                    return <Cell key={index} value={cell.value||cell} />
                })
            }
        </tr>
    )
}

export default Row;