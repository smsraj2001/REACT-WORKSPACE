import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from './reducers/VehicleReducers'; 

const store = configureStore({
    reducer: {
        vehicleCounter: vehicleReducer, 
    },
   
});

export default store;
