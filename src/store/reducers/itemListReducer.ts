import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ItemDetailState } from 'types'

export interface ItemListState {
    items: ItemDetailState[];
    filter: ItemDetailState[];
}

const initialState: ItemListState = {
    items: [],
    filter: [],
}

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        filterItemList: (state, action: PayloadAction<string>) => {
            state.filter = state.items.filter((item) => item.name.includes(action.payload));
        },
        setItemList: (state, action: PayloadAction<ItemDetailState[]>) => {
            state.items = action.payload;
            state.filter = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setItemList, filterItemList } = itemListSlice.actions

export default itemListSlice.reducer