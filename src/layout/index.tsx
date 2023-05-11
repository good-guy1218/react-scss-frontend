import React from 'react';
import { Outlet } from 'react-router';
import style from './style.module.scss';
import Header from './header';

const Layout: React.FC = () => {
    return (
        <div className={style.page}>
            <Header />
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;