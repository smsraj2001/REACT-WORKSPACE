import React from 'react';

class CalculationComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
  }

  add = () => {
    this.setState({
      result: Number(this.state.num1) + Number(this.state.num2),
    });
  }

  subtract = () => {
    this.setState({
      result: Number(this.state.num1) - Number(this.state.num2),
    });
  }

  multiply = () => {
    this.setState({
      result: Number(this.state.num1) * Number(this.state.num2),
    });
  }

  divide = () => {
    if (Number(this.state.num2) === 0) {
      alert('Division by zero is not allowed.');
    } else {
      this.setState({
        result: Number(this.state.num1) / Number(this.state.num2),
      });
    }
  }

  clear = () => {
    this.setState({
      num1: 0,
      num2: 0,
      result: 0,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <h4>Calculator</h4>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="num1"
                      id="num1"
                      value={this.state.num1}
                      onChange={(e) => this.setState({ num1: e.target.value })}
                      placeholder="Enter first number"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="num2"
                      id="num2"
                      value={this.state.num2}
                      onChange={(e) => this.setState({ num2: e.target.value })}
                      placeholder="Enter second number"
                    />
                  </div>
                  <div className="mb-3">
                    <button type="button" className="btn btn-primary me-2" onClick={this.add}>Add</button>
                    <button type="button" className="btn btn-secondary me-2" onClick={this.subtract}>Subtract</button>
                    <button type="button" className="btn btn-success me-2" onClick={this.multiply}>Multiply</button>
                    <button type="button" className="btn btn-danger me-2" onClick={this.divide}>Divide</button>
                    <button type="button" className="btn btn-warning" onClick={this.clear}>Clear</button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <p className="mb-0">Result: {this.state.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculationComponent;
