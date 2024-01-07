import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./layouts/Dashboard.tsx";
import Cars from "./pages/dashboard/Cars.tsx";
import Home from "./pages/dashboard/Home.tsx";
import SearchCar from "./pages/SearchCar.tsx";
import Login from "./pages/Login.tsx";
import UserDashboard from "./layouts/UserDashboard.tsx";
import Register from "./pages/Register.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cari-mobil",
    element: <SearchCar />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/cars",
        element: <Cars />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="603646904982-irlu27mpcdbrg163ejfdcbivimd87lbg.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
