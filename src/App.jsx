import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Load Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy Load Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// 🔥 HALAMAN BARU PERTEMUAN 9
const Produk = React.lazy(() => import("./pages/Produk"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

// Error Pages
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* GROUP MAIN (DENGAN SIDEBAR) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          
          {/* 🔥 ROUTE BARU PERTEMUAN 9 */}
          <Route path="/produk" element={<Produk />} />
          <Route path="/produk/:id" element={<ProductDetail />} />

          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* GROUP AUTH (TANPA SIDEBAR) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;