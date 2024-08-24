import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./orders.scss"
import AllProducts from '../products/data-productslist'
import { orderColumns, productsColumns } from "../../datatablesource";
import { Chip } from "@mui/material";
import AllOrders from "../../data/all-orders-data";
// import { fetchOrdersList } from "./orderService";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const OrdersList = () => {
  const [data, setData] = useState([]);
  const [isDataFetched, setDataFetched] = useState(false);

useEffect(() => {
  fetchOrdersList()
}, []);

const fetchOrdersList = async () => {
await getDocs(collection(db, "orders")).then((querySnapshot) => {
  const newData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  setData(newData);
});
}
  const handleDelete = async (id) => {
    //   try {
    //     await deleteDoc(doc(db, "users", id));
    //     setData(data.filter((item) => item.id !== id));
    //   } catch (err) {
    //     console.log(err);
    //   }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/orders/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <div className="datatable">
        <div className="datatableTitle">
          <span>
            Orders List <Chip label={AllProducts.length} />
          </span>
        </div>
        {/* {isDataFetched && data.length ? */}
        <DataGrid
          className="datagrid"
          rows={data || []}
          columns={orderColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          rowHeight={125}
        /> 
        {/* : null } */}
      </div>
    </div>
  );
}

export default OrdersList