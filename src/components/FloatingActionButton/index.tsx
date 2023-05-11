import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

const FloatingActionButton: React.FC = () => {
    return (
        <div className={style['float-button']}>
            <label>出品</label>
            <FontAwesomeIcon
                icon={faCameraAlt}
                size='2x'
            />
        </div>
    );
}

export default FloatingActionButton;