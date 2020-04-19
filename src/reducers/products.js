import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'Skateboard', price: 100, emoji: '🛹' },
  { id: 2, title: 'Skates', price: 200, emoji: '⛸' },
  { id: 3, title: 'Skis and boots', price: 300, emoji: '🎿' },
  { id: 4, title: 'Surfboard', price: 1000, emoji: '🏄‍♀️' }

]
export const products = createSlice({
  name: 'products',
  initialState: productData
})