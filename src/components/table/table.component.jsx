import React from 'react';

import TableHeader from '../table-header/table-header.component';
import Row from '../row/row.component';

function Table(props) {
    const columns = [
        {
            value:"Id",
            width:2
        },
        {
            value:"Item Name",
            width:30
        },
        {
            value:"Quantity",
            width:14
        },
        {
            value:"Price",
            width:14
        }
    ];

    const rows = [
        [1,"Aluminium Section",5,600],
        [1,"ACP",10,1000],
        [1,"PVC",6,1600],
        [1,"Ply",2,1200],
        [1,"Glass",4,8000],
        [1,"Door",1,6000]
    ];

    return (
        <table className="table table-bordered">
            <thead>
                <TableHeader columns={columns} />
            </thead>
            <tbody>
               {
                   rows.map((row,index)=>{
                       return <Row key={index} cells={row} />
                   })
               } 
            </tbody>
        </table>
    );
}

export default Table;
