import React from 'react';
import { ItemState } from 'types';
import { Link } from 'react-router-dom';
import { faYen } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Icon from 'components/Icon';
import Sold from './Sold';
import style from './style.module.scss';

const Item: React.FC<ItemState> = ({ id, name, price, image, is_sold_out, like_count }) => {
    const {
        ['item--detail']: detail,
        ['img-thumbnail']: thumbnail,
        ['item--name']: itemName,
        ['item--price-detail']: priceDetail,
        ['item--sold']: isSold,
        strong,
    } = style;

    return (
        <Link to={`/items/${id}`}>
            <div className={style.item}>
                <img className={thumbnail} src={image} />
                <div className={detail}>
                    <p className={itemName}>{name}</p>
                    <div className={priceDetail}>
                        <Icon
                            icon={faYen}
                            text={price}
                            strong={true}
                        />
                        {
                            like_count > 0 && (
                                <Icon 
                                    icon={faHeart}
                                    text={like_count}
                                />
                            )
                        }
                    </div>
                    {is_sold_out && <Sold/>}
                </div>
            </div>
        </Link>
    );
}

export default Item;