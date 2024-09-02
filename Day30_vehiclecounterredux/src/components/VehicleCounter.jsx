// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from '../redux/actions/VehicleActions';

// const VehicleCounter = () => {
//     const dispatch = useDispatch();
//     const vehicles = useSelector((state) => state.vehicleCounter.vehicles);
//     const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].vname);
//     const [selectedValue, setSelectedValue] = useState(1);
//     const [action, setAction] = useState('Add'); 

//     const handleVehicleChange = (e) => {
//         setSelectedVehicle(e.target.value);
//     };

//     const handleValueChange = (e) => {
//         setSelectedValue(parseInt(e.target.value));
//     };

//     const handleActionChange = (e) => {
//         setAction(e.target.value);
//     };

//     const handleSubmit = () => {
//         if (action === 'Add') {
//             dispatch(increment({ vname: selectedVehicle, value: selectedValue }));
//         } else if (action === 'Remove') {
//             dispatch(decrement({ vname: selectedVehicle, value: selectedValue }));
//         }
//     };

//     return (
//         <div>
//             <h1>Vehicle Counter App</h1>
//             <select onChange={handleVehicleChange} value={selectedVehicle}>
//                 {vehicles.map((vehicle) => (
//                     <option key={vehicle.vname} value={vehicle.vname}>
//                         {vehicle.vname}
//                     </option>
//                 ))}
//             </select>
//             <select onChange={handleValueChange} value={selectedValue}>
//                 {[1, 2, 3, 4, 5].map((number) => (
//                     <option key={number} value={number}>
//                         {number}
//                     </option>
//                 ))}
//             </select>
//             <select onChange={handleActionChange} value={action}>
//                 <option value="Add">Add</option>
//                 <option value="Remove">Remove</option>
//             </select>

//             <button onClick={handleSubmit}>Submit</button>

//             <ul>
//                 {vehicles.map((vehicle) => (
//                     <li key={vehicle.vname}>
//                         {vehicle.vname}: {vehicle.vcount}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default VehicleCounter;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/actions/VehicleActions';

const VehicleCounter = () => {
    const dispatch = useDispatch();
    const vehicles = useSelector((state) => state.vehicleCounter.vehicles);
    const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].vname);
    const [selectedValue, setSelectedValue] = useState(1);
    const [action, setAction] = useState('Add'); 

    const handleVehicleChange = (e) => {
        setSelectedVehicle(e.target.value);
    };

    const handleValueChange = (e) => {
        setSelectedValue(parseInt(e.target.value));
    };

    const handleActionChange = (e) => {
        setAction(e.target.value);
    };

    const handleSubmit = () => {
        if (action === 'Add') {
            dispatch(increment({ vname: selectedVehicle, value: selectedValue }));
        } else if (action === 'Remove') {
            dispatch(decrement({ vname: selectedVehicle, value: selectedValue }));
        }
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Vehicle Counter App</h1>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="vehicleSelect" className="form-label">Select Vehicle</label>
                    <select 
                        id="vehicleSelect" 
                        className="form-select" 
                        onChange={handleVehicleChange} 
                        value={selectedVehicle}
                    >
                        {vehicles.map((vehicle) => (
                            <option key={vehicle.vname} value={vehicle.vname}>
                                {vehicle.vname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="valueSelect" className="form-label">Select Value</label>
                    <select 
                        id="valueSelect" 
                        className="form-select" 
                        onChange={handleValueChange} 
                        value={selectedValue}
                    >
                        {[1, 2, 3, 4, 5].map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="actionSelect" className="form-label">Select Action</label>
                    <select 
                        id="actionSelect" 
                        className="form-select" 
                        onChange={handleActionChange} 
                        value={action}
                    >
                        <option value="Add">Add</option>
                        <option value="Remove">Remove</option>
                    </select>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <ul className="list-group mt-4">
                {vehicles.map((vehicle) => (
                    <li key={vehicle.vname} className="list-group-item d-flex justify-content-between align-items-center">
                        {vehicle.vname}
                        <span className="badge bg-primary rounded-pill">{vehicle.vcount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleCounter;
