import React from 'react';
import style from './style.module.scss';
import { PriceDetailProps } from 'types';
import Icon from 'components/Icon';
import { faYen } from '@fortawesome/free-solid-svg-icons';

const PriceDetail: React.FC<PriceDetailProps> = ({ price, shipping_fee }) => {
    const { 
        ['price-detail']: priceDetail,
        ['price-detail--info']: priceInfo,
        ['price-detail--purchase-btn']: purchase 
    } = style;

    return (
        <div className={priceDetail}>
            <div className={priceInfo}>
                <Icon
                    icon={faYen}
                    text={price}
                />
                &nbsp;
                <small>{shipping_fee}</small>
            </div>
            <button className={purchase}>購入手続きへ</button>
        </div>
    )
};
export default PriceDetail;