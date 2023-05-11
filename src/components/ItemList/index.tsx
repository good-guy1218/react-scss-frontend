import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'store';
import { setItemList } from 'store/reducers/itemListReducer';
import Item from './Item';
import FloatingActionButton from '../FloatingActionButton';
import { apiRequest } from 'utils/api';
import { ItemState } from 'types';
import style from './style.module.scss';

const ItemList: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.itemList.filter);
    const { ['item-group']: itemGroup } = style;

    const fetchItems = async () => {
        const response = await apiRequest('/items');
        dispatch(setItemList(response.data));
    }
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className={itemGroup}>
            {items && items.map((item: ItemState, index: number) => (
                <Item
                    key={index}
                    id={item.id}
                    name={item.name}
                    is_sold_out={item.is_sold_out}
                    image={item.image}
                    like_count={item.like_count}
                    price={item.price}
                />
            ))}
            <FloatingActionButton />
        </div>
    );
}

export default ItemList;