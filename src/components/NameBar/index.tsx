import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/Icon';
import type { RootState } from 'store';

import style from './style.module.scss';

const NameBar: React.FC = () => {
    const name = useSelector((state: RootState) => state.item.name);

    return (
        <div className={style['name-bar']}>
            <Link to={'/'}>
                <Icon
                    icon={faChevronLeft}
                />
            </Link>
            &nbsp;
            {name}
        </div>
    )
}
export default NameBar;