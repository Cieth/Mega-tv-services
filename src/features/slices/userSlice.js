import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  aptNumber: '',
  email: '',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAptNumber: (state, action) => {
      state.aptNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setAddress,
  setAptNumber,
  setEmail,
  setPhoneNumber,
} = userSlice.actions;

export default userSlice.reducer;
