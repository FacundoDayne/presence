import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AnotherPage from "./pages/AnotherPage.jsx";

const router = createBrowserRouter([
    {
        path: "/presence",
        element: <App />,
        children: [
            {
                path: "/presence/",
                element: <HomePage />,
            },
            {
                path: "/presence/Profile",
                element: <ProfilePage />,
            },
            {
                path: "/presence/Another",
                element: <AnotherPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
