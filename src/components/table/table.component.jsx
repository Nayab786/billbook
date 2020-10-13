import React from 'react';

import Column from '../column/column.component';
import Row from '../row/row.component';



function Table(props) {
    const columns = [
        {
            col_id:'col_2',
            col_position:'2',
            col_name:'product_name',
            col_label:'Product Name',
            width:30
        },
        {
            col_id:'col_1',
            col_position:'1',
            col_name:'serial_no',
            col_label:'Serial No',
            width:3
        },
        {
            col_id:'col_3',
            col_position:'3',
            col_name:'no_of_items',
            col_label:'No of Items',
            width:9
        },
        {
            col_id:'col_4',
            col_position:'4',
            col_name:'price',
            col_label:'Price',
            width:9
        },
        {
            col_id:'col_5',
            col_position:'5',
            col_name:'cost',
            col_label:'Cost',
            width:9
        },
        
        
        
        
    ];


    const rows = [
        {
            row_id:1,
            row_position:1,
            values:{
                col_2:"Plywood",
                col_1:1,
                col_3:4,
                col_4:2000,
                col_5:{
                    type:"formula",
                    formula:"=col_3*col_4"  
                }
            }
        }
    ];

    const col_positions = {};
    columns.forEach(column=>col_positions[column.col_id] = column.col_position);

    columns.sort((a,b)=>{
        if(a.col_position<b.col_position)return -1;
        else if(a.col_position>b.col_position)return 1;
        else return 0;
    });

    rows.sort((a,b)=>{
        if(a.row_position<b.row_position)return -1;
        else if(a.row_position>b.row_position)return 1;
        else return 0;
    })

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => {
                            return <Column key={index} {...column} />
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return <Row key={index} col_positions={col_positions}{...row} />
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;
