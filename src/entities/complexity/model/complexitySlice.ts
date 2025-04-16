import { createSlice } from "@reduxjs/toolkit";
import { complexityInitialState } from "@/entities/complexity/libs/constants.ts";

const complexitySlice = createSlice({
  name: "complexitySlice",
  initialState: complexityInitialState,
  reducers: {
    chooseComplexity: (state, action) => {
      const choosedId = action.payload;
      state.complexityList.forEach((complexityItem) => {
        if (complexityItem.id === choosedId) {
          complexityItem.selected = !complexityItem.selected;
        }
      });
    },
  },
});

export { complexitySlice };
export const { chooseComplexity } = complexitySlice.actions;
