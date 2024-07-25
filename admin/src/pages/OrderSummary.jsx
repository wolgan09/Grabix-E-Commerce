import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'
// import * as DATA from '../data.json';

import {useCallback, useEffect, useMemo, useState} from 'react';
import {AgGridReact} from "ag-grid-react";

const CustomButtonComponent = () => {
    return (
        <button >Delete</button>
    );
}

function OrderSummary() {
    const [rowData, setRowData] = useState([
      {
        "prod_name": "IPHONE 15",
        "order_id": "#01",
        "prod_id": "P01",
        "date": '30 / 07 / 2024',
        "pay_type": "CARD",
      },
      {
        "prod_name": "Macbook Air",
        "order_id": "#02",
        "prod_id": "P02",
        "date": '30 / 07 / 2024',
        "pay_type": "UPI",
      },
    ]);
    const [columnDefs, setColumnDefs] = useState([
        {field: 'prod_name', headerName: "Product Name",},
        {field: 'order_id', headerName: "Order Id",},
        {field: 'prod_id',headerName: "Product Id"},
        {field: 'date',headerName: "Created at"},
        {field: 'pay_type', headerName: "Payment Type"},
        {
            field: "actions",
            headerName: "Actions",
            cellRenderer: CustomButtonComponent,
          }
    ]);


    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), []);

    const cellClickedListener = useCallback(e => {
        console.log('cellClicked', e);
    }, [])

    return (
        <div className='ag-theme-alpine' style={{height: 500}}>
            <AgGridReact
                onCellClicked={cellClickedListener}
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}
                animateRows={true}
                rowSelection='multiple'
            />
        </div>
    );
}

export default OrderSummary;