import React, { StrictMode } from "react";
import ReactDOM  from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import LoginForm from "./routes/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./routes/Dashboard";
import { AuthProvider } from "./auth/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            }]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);