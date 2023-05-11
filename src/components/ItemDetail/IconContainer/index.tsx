import React from 'react';
import Icon from 'components/Icon';
import { IconProps } from 'types';
import style from './style.module.scss';

const CircleContainer: React.FC<IconProps> = ({icon, text, count}) => {
    return (
        <div className={style.container}>
            <Icon 
                icon={icon}
                text={text}
                color={'#B2B2B7'}
            />
            {count?count:''}
        </div>
    );
}
export default CircleContainer;