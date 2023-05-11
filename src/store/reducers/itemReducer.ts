import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItemNameState {
  name: string
}

const initialState: ItemNameState = {
  name: '',
}

export const itemSlice = createSlice({
  name: 'productName',
  initialState,
  reducers: {
    setItemName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItemName } = itemSlice.actions

export default itemSlice.reducer