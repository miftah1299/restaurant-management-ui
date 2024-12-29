import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: "*",
        element: <div>Not Found</div>,
    },
]);

export default Routes;
