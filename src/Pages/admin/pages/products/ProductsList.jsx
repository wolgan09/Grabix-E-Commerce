import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./products.scss";
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import AllProducts from "./data-productslist";
import { productsColumns } from "../../datatablesource";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import * as React from "react";
import BasicModal from "../../components/modal";
import { TextField } from "@mui/material";

const ProductsList = () => {
  const initialProduct = {
    id: undefined,
    name: "",
    price: 0,
    category: ""
  };

  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState({
    isOpen: false,
    mode: 1
  });

  const [product, setProduct] = React.useState(initialProduct);
  const [refreshDataCounter, setRefreshDataCounter] = React.useState(0);

  const fetchProductsList = async () => {
    await getDocs(collection(db, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setData(newData);
    });
  };

  const handleOpen = (mode) => setOpen({ isOpen: true, mode });
  const handleClose = React.useCallback(() => {
    setOpen({ isOpen: false });
    setProduct(initialProduct);
  }, []);
  // console.log(refreshDataCounter);
  const handleDelete = (id) => {
    handleOpen(3);
    setProduct({
      id
    });
    // try {
    //   await deleteDoc(doc(db, "products", id)).then((querySnapshot) => {
    //     setRefreshDataCounter((prev) => ++prev);
    //   });
    //   // .finally(() => setRefreshDataCounter((prev) => ++prev));
    //   // setData(data.filter((item) => item.id !== id));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const confirmDelete = async () => {
    const { id } = product;
    try {
      await deleteDoc(doc(db, "products", id)).then((querySnapshot) => {
        setRefreshDataCounter((prev) => ++prev);
      });
      // .finally(() => setRefreshDataCounter((prev) => ++prev));
      // setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (params) => {
    handleOpen(2);
    const { id, name, price, category } = params.row;
    // console.log(params);

    // const productCollectionRef = doc(db, "products", params.row.id);

    setProduct({
      id,
      name,
      price,
      category
    });
  };
  const handleSubmit = async (e) => {
    setOpen(true);
    e.preventDefault();

    const { id, name, category, price } = product;

    // Add product to firebase collection
    if (open.mode === 2) {
      await updateDoc(doc(db, "products", id), {
        name,
        price, // Ensure price is a number
        category
      }).then((value) => setRefreshDataCounter((prev) => ++prev));
      // .finally(() => setRefreshDataCounter((prev) => ++prev));
    }
    if (open.mode === 1) {
      const productCollectionRef = collection(db, "products");
      await addDoc(productCollectionRef, {
        name,
        price, // Ensure price is a number
        category
      }).then((value) => setRefreshDataCounter((prev) => ++prev));
      // .finally(() => setRefreshDataCounter((prev) => ++prev));

      // Reset form fields
    }
    setProduct(initialProduct);
    // Optionally, display a success message
  };

  const checkDisabled = () => {
    if (open.mode === 1) {
      if (
        product.name === "" ||
        product.price === 0 ||
        product.category === ""
      ) {
        return true;
      }
      return false;
    }
    if (open.mode === 2) {
      if (
        product.name === "" ||
        product.price === 0 ||
        product.category === ""
      ) {
        return true;
      }
      return false;
    }
  };

  React.useEffect(() => {
    if (refreshDataCounter >= 0) {
      fetchProductsList();
      handleClose();
    }
  }, [handleClose, refreshDataCounter]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="flex gap-5 h-full items-center">
            <Link
              to={`/admin/products/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="text-[#7451f8]">
                <span className="border border-[#7451f8] px-2 py-1">View</span>
              </div>
            </Link>
            <div
              className="text-yellow-700 cursor-pointer h-full"
              onClick={() => handleEdit(params)}
            >
              <span className="border-yellow-700 border px-2 py-1">Edit</span>
            </div>
            <div
              className="text-red-700 cursor-pointer "
              onClick={() => handleDelete(params.row.id)}
            >
              <span className="border border-red-700 px-2 py-1">Delete</span>
            </div>
          </div>
        );
      }
    }
  ];
  return (
    <div className="px-3 h-full w-full">
      <div className="flex items-center justify-between my-3">
        <p className="text-[#7451f8] font-bold text-xl">Products</p>
        <button
          // to="/admin/products/new"
          onClick={() => handleOpen(1)}
          className="border px-3 py-2 rounded-md text-[#7451f8] border-[#7451f8]"
        >
          Add Product
        </button>
      </div>
      <div className="h-[calc(100vh_-_11rem)]">
        <DataGrid
          className="overflow-auto position-relative h-full bg-white"
          rows={data || []}
          columns={productsColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          // rowHeight={125}
        />
      </div>
      <BasicModal open={open.isOpen} handleClose={handleClose}>
        {open.mode !== 3 && (
          <div className="px-5">
            <p className="text-[#7451f8] font-bold text-xl">
              {open.mode === 1 ? "Add New" : "Edit"} Product
            </p>
            <div className="w-full flex flex-col">
              <div className="my-5 w-full">
                <TextField
                  id="productName"
                  value={product.name}
                  onChange={(e) =>
                    setProduct((prev) => {
                      return {
                        ...prev,
                        name: e.target.value
                      };
                    })
                  }
                  label="Name"
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="my-5 w-full">
                <TextField
                  id="productPrice"
                  value={product.price}
                  onChange={(e) =>
                    setProduct((prev) => {
                      return {
                        ...prev,
                        price: e.target.value
                      };
                    })
                  }
                  label="Price"
                  variant="standard"
                  type="number"
                  className="w-full"
                />
              </div>
              <div className="my-5 w-full">
                <TextField
                  id="productCategory"
                  value={product.category}
                  onChange={(e) =>
                    setProduct((prev) => {
                      return {
                        ...prev,
                        category: e.target.value
                      };
                    })
                  }
                  label="Category"
                  variant="standard"
                  className="w-full"
                />
              </div>
              <button
                className="border px-3 py-2 rounded-md disabled:text-gray-500 disabled:border-gray-500 text-[#7451f8] border-[#7451f8]"
                type="submit"
                onClick={handleSubmit}
                disabled={checkDisabled() || false}
              >
                {open.mode === 1 ? "Add" : "Edit"}
              </button>
            </div>
          </div>
        )}
        {open.mode === 3 && (
          <div className="px-5">
            <p className="text-[#7451f8] font-bold text-md">
              Are you sure you want to delete this product ?
            </p>
            <div className="w-full flex justify-between mt-5">
              <button
                className="border px-3 py-2 rounded-md disabled:text-gray-500 disabled:border-gray-500 text-white bg-red-600 border-red-600"
                type="submit"
                onClick={confirmDelete}
              >
                Delete
              </button>
              <button
                className="border px-3 py-2 rounded-md disabled:text-gray-500 disabled:border-gray-500 text-[#7451f8] border-[#7451f8]"
                type="submit"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </BasicModal>
    </div>
  );
};

export default ProductsList;
