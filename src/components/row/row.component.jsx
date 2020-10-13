import React from 'react';

import Cell from '../cell/cell.component';

function Row(props){
    console.log("row",props)
    const {
        row_id:id,
        col_positions:col_positions,
        values:values
    } = props;

    const cells = Object.entries(values).sort((a,b)=>{
        if(col_positions[a[0]]<col_positions[b[0]])return -1;
        else if(col_positions[a[0]]>col_positions[b[0]])return 1;
        else return 1;
    });
    console.log("cells", cells)
    return(
        <tr>
            {
                cells.map((cell,index)=>{
                    return <Cell key={index} col_position={col_positions[cell[0]]} row_id={id} col_id={cell[0]} value={cell[1]||cell} />
                })
            }
        </tr>
    )
}

export default Row;