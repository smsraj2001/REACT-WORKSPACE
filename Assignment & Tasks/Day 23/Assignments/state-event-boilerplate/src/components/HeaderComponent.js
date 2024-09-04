import React from "react";
import LogoComponent from "./LogoComponent";
import ViewTitleComponent from "./ViewTitleComponent";
import './Component.css';

class HeaderComponent extends React.Component {
    // Define Constructor
    constructor(){
        super();
        this.state = {
            name: "",
        };
    }

    // Define handleChange method
    handleChange = (childData) => { 
        this.setState({ name: childData });
    }

    render() {
        return (
            <div className="HeaderComponent">
                <h2>I am Header Component with title from child: {this.state.name}</h2>
                <LogoComponent input={this.state.name}></LogoComponent>
                {/* Define event to handle changes in ViewTitleComponent */}
                <ViewTitleComponent
                 parentCallback={this.handleChange}
                 input={this.state.name}
                 />
            </div>
        );
    }
}
export default HeaderComponent;
