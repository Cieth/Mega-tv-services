import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateT {
  firstName: string;
  lastName: string;
  address: string;
  aptNumber: string;
  plan: string;
  email: string;
  phoneNumber: string;
}

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  aptNumber: '',
  plan: '',
  email: '',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as initialStateT,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setAptNumber: (state, action: PayloadAction<string>) => {
      state.aptNumber = action.payload;
    },
    setPlan: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setAddress,
  setAptNumber,
  setPlan,
  setEmail,
  setPhoneNumber,
} = userSlice.actions;

export default userSlice.reducer;
