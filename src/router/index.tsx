import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom';
import Layout from 'layout';
import ItemDetail from 'components/ItemDetail';
import ItemList from 'components/ItemList';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <ItemList />,
            },
            {
                path: '/items/:itemId',
                element: <ItemDetail />,
            }
        ]
    }
]);
export default router;