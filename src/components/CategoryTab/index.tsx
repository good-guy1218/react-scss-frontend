import React, { useEffect, useState } from 'react';
import { apiRequest } from 'utils/api';
import { CategoryState } from 'types';
import style from './style.module.scss';

const CategoryTabs: React.FC = () => {
    const [categoires, setCategories] = useState<CategoryState[]>([]);
    const { category, ['category--list']: categoryList, active } = style;

    const fetchCategories = async () => {
        const response = await apiRequest('/categories');
        setCategories(response.data);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className={category}>
            <ul className={categoryList}>
                {categoires && categoires.map((item: CategoryState, index: number) => (
                    <li key={index} className={index == 2 ? active : ''}>
                        <a data-id={item.id}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryTabs;