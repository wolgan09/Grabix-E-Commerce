import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'
import {useCallback, useEffect, useMemo, useState} from 'react';
import {AgGridReact} from "ag-grid-react";

const CustomButtonComponent = () => {
  return (
      <button >Delete</button>
  );
}
const Products = () => {
    const [rowData, setRowData] = useState([
        {
          "img":require("../assets/images/avt.jpg"),
          "vendor_name": "Apple",
          "vendor_email": "apple@grabix.com",
          "mobile_no": "99999 00000",
          "qty": '20',
          "city": "Pune",
        },
        {
          "img":require("../assets/images/avt.jpg"),
          "vendor_name": "Philips",
          "vendor_email": "philips@grabix.com",
          "mobile_no": "99999 11111",
          "qty": '30',
          "city": "Pune",
        },
      ]);
      const [columnDefs, setColumnDefs] = useState([
        {
          field: "img",
          headerName: "Image",
          cellRenderer: (rowObj) => (
            <img
              style={{ width: 100, height: 100, padding: 10 }}
              src={rowObj.value}
            />
          ),
        },
        { field: "vendor_name", headerName: "Product Name" },
        { field: "vendor_email", headerName: "Product Id" },
        { field: "mobile_no", headerName: "Stock Status" },
        { field: "qty", headerName: "Qty" },
        { field: "city", headerName: "Delivery" },
        {
          field: "actions",
          headerName: "Actions",
          cellRenderer: CustomButtonComponent,
        },
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
                  gridOptions={{rowHeight: 100}}
              />
          </div>
      );
    }

export default Products
