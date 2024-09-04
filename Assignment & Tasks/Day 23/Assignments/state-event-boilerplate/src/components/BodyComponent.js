import React from "react";
import BodyContentComponent from "./BodyContentComponent";
import './Component.css';

class BodyComponent extends React.Component {
    // define BodyComponent constructor 
    constructor() {
        super();
        // define state object
        this.state = {
            value: "StackRoute"
        };
    }

    //method to handle change event
    handleChange() { }
    render() {
        return (
            <div className="BodyComponent">
                <h2> I am Body Component!!</h2>
                <form>
                    <div>
                        <label>Body text:</label>
                        {/* Define Input field to take in data and set State value */}
                        <input
                            type="text"
                            name="bodyText"
                            id="bodyText"
                            value={this.state.value}
                            onChange={(e) => this.setState({ value: e.target.value })}
                        />
                        
                        <p>State value: {this.state.value}</p>
                    </div>
                </form>
                <BodyContentComponent text={this.state.value}></BodyContentComponent>
                <BodyContentComponent text={this.state.value}></BodyContentComponent>
            </div>
        );
    }
}
export default BodyComponent;