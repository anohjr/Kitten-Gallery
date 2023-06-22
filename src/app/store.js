import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import breedReducer from '../components/cat_filter/catFilterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        breed: breedReducer,
    },
});