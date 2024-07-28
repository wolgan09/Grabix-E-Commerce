import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import AllProducts from './data-productslist'
import { productsColumns } from "../../datatablesource";

const ProductsList = () => {
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
            Products List
            <Link to="/admin/users/new" className="link">
              Add Product
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={AllProducts}
            columns={productsColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            rowHeight={125}
          />
        </div>
      </div>
  );
}

export default ProductsList