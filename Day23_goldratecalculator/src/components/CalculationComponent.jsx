import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculationComponent = () => {
  const [weight, setWeight] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [makingCharge, setMakingCharge] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const calculate = () => {
    const price = parseFloat(document.getElementById('price').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const makingCharge = parseFloat(document.getElementById('makingCharge').value);
    const tax = parseFloat(document.getElementById('tax').value);
    const taxamount = (weight * price) * (tax / 100);
    const makingChargeamount = (weight * price) * (makingCharge / 100);
    const total = (weight * price) + makingChargeamount + taxamount;
    setResult(total);
  }

  const clear = () => {
    setWeight(0);
    setPrice(0);
    setMakingCharge(0);
    setTax(0);
    setResult(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg">
            <img src="/images/gold.png"
            className="card-img-top" alt="Gold Image" />
            <div className="card-header bg-primary text-white text-center">
              <h4 className="card-title">Gold Rate Calculator</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">Weight (grams)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight of Gold in grams"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price (₹ per gram)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price of gold per gram"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="makingCharge" className="form-label">Making Charge (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="makingCharge"
                    id="makingCharge"
                    value={makingCharge}
                    onChange={(e) => setMakingCharge(e.target.value)}
                    placeholder="Enter Making Charge in Rupees"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tax" className="form-label">Tax (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="tax"
                    id="tax"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                    placeholder="Enter Total Tax in percentage"
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <button type="button" className="btn btn-success" onClick={calculate}>Calculate</button>
                  <button type="button" className="btn btn-danger" onClick={clear}>Clear</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center bg-info">
              <p className="mb-0 fs-5">Total Cost in Rupees: <strong>₹{result}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculationComponent;
