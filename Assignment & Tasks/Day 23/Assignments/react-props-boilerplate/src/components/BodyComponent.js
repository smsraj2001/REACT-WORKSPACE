import React from "react";
import './Body.css';
import BodyContentComponent from './BodyContentComponent'; // Import BodyContentComponent

class BodyComponent extends React.Component {
    render() {
        return (
            <div className="BodyComponent">
                <h2>I am Body Component!!</h2>

                {/* Call BodyContentComponent 2 times */}
                <BodyContentComponent bodyobj={{ message: "Left" }} />
                <BodyContentComponent bodyobj={{ message: "Right" }} />
            </div>
        );
    }
}

export default BodyComponent;
