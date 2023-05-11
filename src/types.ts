import { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ItemDetailState {
    id: number;
    name: string;
    description: string;
    like_count: number;
    comment_count: number;
    price: number;
    is_sold_out: boolean;
    shipping_fee: string;
    image: string;
    category_id: number;
}
export interface ItemState {
    id: number;
    name: string;
    image: string;
    is_sold_out: boolean;
    like_count: number;
    price: number;
}
export interface CategoryState {
    id: number;
    name: string;
}
export interface IconProps {
    icon: IconProp;
    size?: SizeProp;
    text?: string | number;
    strong?: boolean;
    color?:string;
    count?: number;
}
export interface ToolbarProps {
    children: IconProps[];
}
export interface PriceDetailProps {
    price: number;
    shipping_fee: string;
}
export interface ProductContextState{
    productInfo: ItemDetailState | null;
    setProductInfo: React.Dispatch<React.SetStateAction<ItemDetailState | null>>;
}
export interface ProductContextProps {
    children: React.ReactNode;
}