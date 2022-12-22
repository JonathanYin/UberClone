import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    // create slice, passing in initialState of data layer and dispatching actions into data layer (set origin, destination, travelTimeInformation, etc)
    name: 'nav',
    initialState,
    reducers: {
        // manipulate part of data layer when action comes in
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin; 
export const selectDestination = (state) => state.nav.destination; 
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; 

// export navigation slice reducer to store
export default navSlice.reducer;