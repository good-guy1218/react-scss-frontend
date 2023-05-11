import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from 'types';
import style from './style.module.scss';

const Icon: React.FC<IconProps> = ({ icon, text, size, strong, color }) => {

    return (
        <div className={strong ? style.strong : ''}>
            <FontAwesomeIcon
                icon={icon}
                color={color}
                size={size}
            />
            {text?.toLocaleString("en-US")}
        </div>
    );
}
export default Icon;