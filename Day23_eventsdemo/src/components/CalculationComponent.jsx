import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculationComponent = () => {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  }

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  }

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  }

  const divide = () => {
    setResult(Number(num1) / Number(num2));
  }

  const clear = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="num1"
                    id="num1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="num2"
                    id="num2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                  />
                </div>
                <div className="mb-3">
                  <button type="button" className="btn btn-primary me-2" onClick={add}>Add</button>
                  <button type="button" className="btn btn-secondary me-2" onClick={subtract}>Subtract</button>
                  <button type="button" className="btn btn-success me-2" onClick={multiply}>Multiply</button>
                  <button type="button" className="btn btn-danger me-2" onClick={divide}>Divide</button>
                  <button type="button" className="btn btn-warning" onClick={clear}>Clear</button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <p className="mb-0">Result: {result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculationComponent;
