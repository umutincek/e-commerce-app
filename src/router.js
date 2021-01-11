import Homepage from "@/views/Homepage";
import AddProduct from "@/views/AddProduct";
import ShoppingCart from "@/views/ShoppingCart";
import FilterCategory from "@/views/FilterCategory";
import Details from "@/views/Details";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Homepage,
    },
    {
        path: "/add-product",
        component: AddProduct,
    },
    {
        path: "/shopping-cart",
        component: ShoppingCart,
    },
    {
        path: "/category/:categoryId",
        component: FilterCategory,
    },
    {
        path: "/details/:id",
        component: Details,
    },
]

const router = createRouter({
    history : createWebHashHistory(),
    routes,
});

export default router;
