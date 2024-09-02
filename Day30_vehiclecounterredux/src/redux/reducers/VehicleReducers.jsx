const initialState = {
    vehicles: [
        { vname: 'Jupiter', vcount: 50 },
        { vname: 'NTorq', vcount: 52 }
    ]
};

const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                vehicles: state.vehicles.map(vehicle =>
                    vehicle.vname === action.payload.vname
                        ? { ...vehicle, vcount: vehicle.vcount + action.payload.value }
                        : vehicle
                ),
            };
        case "DECREMENT":
            return {
                ...state,
                vehicles: state.vehicles.map(vehicle =>
                    vehicle.vname === action.payload.vname
                        ? { ...vehicle, vcount: Math.max(vehicle.vcount - action.payload.value, 0) }
                        : vehicle
                ),
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

export default vehicleReducer;
