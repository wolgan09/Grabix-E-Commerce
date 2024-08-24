import { Alert } from '@mui/material';
import React, { useState } from 'react'

function Snackbar(props) {
    const [open, setOpen] = useState();

    const handleClose = (event, reason) => {
        if ("clickaway" == reason) return;
        setOpen(false);
    };
  return (
    <div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>

  )
}

export default Snackbar