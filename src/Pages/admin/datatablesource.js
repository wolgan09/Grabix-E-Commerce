export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.user}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "images",
    headerName: "image",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.images} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "category",
    headerName: "Category",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];
