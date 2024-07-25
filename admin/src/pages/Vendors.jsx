import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'
import {useCallback, useEffect, useMemo, useState} from 'react';
import {AgGridReact} from "ag-grid-react";

const CustomButtonComponent = () => {
  return (
      <button >Delete</button>
  );
}
const Vendors = () => {
  const [rowData, setRowData] = useState([
    {
      "vendor_name": "Apple",
      "vendor_email": "apple@grabix.com",
      "mobile_no": "99999 00000",
      "date_joined": '30 / 07 / 2024',
      "city": "Pune",
    },
    {
      "vendor_name": "Philips",
      "vendor_email": "philips@grabix.com",
      "mobile_no": "99999 11111",
      "date_joined": '30 / 07 / 2024',
      "city": "Pune",
    },
  ]);
  const [columnDefs, setColumnDefs] = useState([
      {field: 'vendor_name', headerName: "Vendor Name",},
      {field: 'vendor_email', headerName: "Email",},
      {field: 'mobile_no',headerName: "Contact"},
      {field: 'date_joined',headerName: "Joined on"},
      {field: 'city', headerName: "Address"},
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

export default Vendors;
