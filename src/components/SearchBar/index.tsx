import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { filterItemList } from 'store/reducers/itemListReducer';
import Icon from 'components/Icon';
import style from './style.module.scss';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('');
    const { ['search-bar']: searchBar } = style;
    useEffect(() => {
        dispatch(filterItemList(filter));
    }, [filter]);

    return (
        <div
            className={searchBar}
        >
            <Icon
                icon={faBars}
            />
            <input
                placeholder='検索'
                type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;