import { configureStore } from '@reduxjs/toolkit'
import {counterSlice, increment} from './slices/counter/counterSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})