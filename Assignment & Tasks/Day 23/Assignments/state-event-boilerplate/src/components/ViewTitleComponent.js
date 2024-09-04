import React from 'react';

class ViewTitleComponent extends React.Component {
    // Define Constructor
    constructor(props){
        super(props);
        this.state = {
            name: 'NIIT',
        };
    }

    // Define handleValChange method
    handleValChange = (e) => { 
        this.setState({ name: e.target.value });
        this.props.parentCallback(e.target.value);
    };

    render() {
        return (
            <div className="ViewTitleComponent">
                <form>
                    <div>
                        <label>View Title:</label>
                        {/* Define input field to handle changes */}
                        <input
                            type="text"
                            name="bodyText"
                            id="bodyText"
                            value={this.state.name}
                            onChange={this.handleValChange}
                        />
                    </div>
                </form>
                <p>Title value: {this.props.input}</p>
            </div>
        );
    }
}
export default ViewTitleComponent;
