import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./orders.scss"
import AllProducts from '../products/data-productslist'
import { orderColumns, productsColumns } from "../../datatablesource";
import { Chip } from "@mui/material";
import AllOrders from "../../data/all-orders-data";

const OrdersList = () => {
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
            <Link to="/admin/users/test" style={{ textDecoration: "none" }}>
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
            <span>Orders List <Chip label={AllProducts.length} /></span>
          </div>
          <DataGrid
            className="datagrid"
            rows={AllOrders}
            columns={orderColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            rowHeight={125}
          />
        </div>
      </div>
  );
}

export default OrdersList