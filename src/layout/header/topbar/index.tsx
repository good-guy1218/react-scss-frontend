import React from 'react';
import style from './style.module.scss';

type Props = {
    children: React.ReactNode;
}

const TopBar: React.FC<Props> = ({ children }) => {
    return (
        <div className={style.topbar}>
            {children}
        </div>
    );
}
export default TopBar;