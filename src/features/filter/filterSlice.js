const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagsSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexOfTag = state.tags.indexOf(action.payload);
      if (indexOfTag !== -1) {
        state.tags.splice(indexOfTag, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searched, tagRemoved, tagsSelected } = filterSlice.actions;
