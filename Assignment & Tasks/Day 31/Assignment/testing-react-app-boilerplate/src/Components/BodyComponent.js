import React from "react";

class BodyComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { value: "John"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div className="BodyComponent">
                <h2>Hello {this.props.name}!!</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} data-testid = "inputfield"/>
                    </div>
                </form>
                <button data-testid = "bodybutton" onClick={()=> {this.setState({value: "Guest"})}}>Reset Name</button>
                <p id="name_entered" data-testid = "name_entered">Name Entered: {this.state.value}</p>
            </div>
        );
    }
}
export default BodyComponent;