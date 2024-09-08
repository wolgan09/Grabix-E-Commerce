import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Customer from "./Pages/client/Customer";
import Admin from "./Pages/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Customer />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
