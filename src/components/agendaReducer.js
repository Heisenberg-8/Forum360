import { createSlice } from "@reduxjs/toolkit";

const agendaSlice = createSlice({
  name: "agenda",
  initialState: [], // Initial state placeholder
  reducers: {
    updateAgenda: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateAgenda } = agendaSlice.actions;
export default agendaSlice.reducer;
