import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setItemName } from 'store/reducers/itemReducer';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { apiRequest } from 'utils/api';
import { ItemDetailState } from 'types';
import IconContainer from './IconContainer';
import PriceDetail from './PriceDetail';
import Sold from 'components/ItemList/Item/Sold';
import style from './style.module.scss';


const ItemDetail: React.FC = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams<{ itemId: string }>();
    const [item, setItem] = useState<ItemDetailState | null>(null);
    const {
        ['product-detail']: detail,
        ['product-detail--name']: productName,
        ['img-thumbnail']: thumbnail,
        ['product-detail--icon-container']: iconContainer,
        ['product-detail--caption']: caption,
        ['product-detail--description']: description,
    } = style;

    const fetchItem = async () => {
        const response = await apiRequest(`/items/${itemId}`);
        setItem(response);
        dispatch(setItemName(response.name));
    }

    useEffect(() => {
        fetchItem();
    }, [itemId]);

    if (!item) {
        return <div>Loading...</div>;
    }
    return (
        <div className={detail}>
            <div>
                <img
                    src={item.image}
                    className={thumbnail}
                />
            </div>
            <div>
                <p className={productName}>{item.name}</p>
                <div className={iconContainer}>
                    <div>
                        <IconContainer
                            icon={faHeart}
                            text={'いいね'}
                            count={item.like_count}
                        />
                        <IconContainer
                            icon={faComment}
                            text={'コメン卜'}
                            count={item.comment_count}
                        />
                    </div>
                    <IconContainer
                        icon={faFlag}
                    />
                </div>
                <p className={caption}>
                    商品の説明
                </p>
                <p className={description}>
                    {item.description}
                </p>
                <PriceDetail
                    price={item.price}
                    shipping_fee={item.shipping_fee}
                />
            </div>
            {item.is_sold_out && <Sold />}
        </div>
    );
}

export default ItemDetail;