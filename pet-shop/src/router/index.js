import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CartView } from "../views/CartView";
import { CategoryView } from "../views/Category";
import ItemView from "../views/ItemView";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>

    },
    {
        path: '/category/:category',
        element: <CategoryView/>
    },
    {
        path: '/item/:id',
        element: <ItemView/>

    },
    {
        path: '/cart',
        element: <CartView/>
    }
])