import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  assignments:db.assignments,
  assignment: {name: "New assignment", _id: "000", title: "New title", Course: "RS103", description: 'New Description', points: 100,
  dueDate: '',
  availableFromDate: '',
  availableUntilDate: '', },
}
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
  },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = { ...action.payload };
      }
    },
    
    selectAssignment: (state, action) => {
      state.assignment= action.payload;
    }, // 这个地方可能有问题
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;