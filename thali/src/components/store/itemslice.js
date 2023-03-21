import { createSlice } from "@reduxjs/toolkit";

let initanlstate = { item: [], totalitems: 0, totalprice: 0 };
   let newitem
let itemslice = createSlice({
  name: "itemslice",
  initialState: initanlstate,
  reducers: {
    additem(state, action) {
      newitem = action.payload;
      state.totalprice = state.totalprice + action.payload.price;
      let existingitem = state.item.find((item) => item.id === newitem.id);
      state.totalitems++;
      if (!existingitem) {
        state.item.push({
          id: newitem.id,
          price: newitem.price,
          title: newitem.title,
          quantity: 1,
          totalprice: newitem.price,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalprice = existingitem.totalprice + newitem.price;
      }
    },
    removeitem(state, action) {
      let id = action.payload;
      state.totalprice = state.totalprice - newitem.price;
      let existingitem = state.item.find((item) => item.id === id);
      state.totalitems--;
      if (existingitem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
      }
    },
  },
});

export const itemsliceaction = itemslice.actions;
export default itemslice;
