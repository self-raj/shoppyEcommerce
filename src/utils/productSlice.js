import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { item: [] },
  reducers: {
   addItem: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );
      // jb add to cart karenge tab pahle se quantity hai to uski 1+ kar dega 
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    // same product ko multiply add karne par usno decrease karege hai ui repit nhi hoga
    decreaseItem: (state, action) => {
  const item = state.item.find((i) => i.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.item = state.item.filter((i) => i.id !== action.payload);
  }
},
    removeItem: (state ,action) => {
    //   state.item.pop();
         state.item = state.item.filter(cartItem => cartItem.id !== action.payload);
    },
    clearCart: (state) => {
      state.item.length = 0;
      console.log("clrat");
      
      
    },
  },
});

export const { addItem, removeItem, clearCart ,decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
