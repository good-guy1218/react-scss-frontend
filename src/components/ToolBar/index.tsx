import React from 'react';
import { ToolbarProps } from 'types';
import Icon from 'components/Icon';
import style from './style.module.scss';

const ToolBar: React.FC<ToolbarProps> = ({children}) => {
    return (
        <div className={style.toolbar}>
            {children && children.map((item, index) => (
                <Icon
                    key={index}
                    icon={item.icon}
                />
            ))}
        </div>
    );
}
export default ToolBar;