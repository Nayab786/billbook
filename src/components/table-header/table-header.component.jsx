import React from 'react';
import Column from '../column/column.component';
function TableHeader(props){
    const columns = props.columns;

    return (
        <tr>
            {
                columns.map((column,index)=>{
                    return <Column key={index} {...column}/>
                })
            }
        </tr>
    )
}

export default TableHeader;