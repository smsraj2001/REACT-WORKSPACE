import React from 'react';

const Cart = () => {
  return (
    <div className="row mb-4">
      {/* Form Section */}
      <div className="col-md-8 offset-md-2">
        <div className="card p-4 shadow-sm">
          <h3 className="text-center mb-4">Shop with us</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="U" placeholder="Enter your username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="P" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
              <label htmlFor="product" className="form-label">Product</label>
              <select className="form-select" id="product">
                <option value="ntorq">NTorq</option>
                <option value="jupiter">Jupiter</option>
                <option value="ronin">Ronin</option>
                <option value="apache">Apache</option>
                <option value="iqube">IQube</option>
                <option value="king">King</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input type="number" className="form-control" id="quantity" name="quantity" min="1" placeholder="Enter quantity" />
            </div>
            <div className="mb-3">
              <label htmlFor="cart" className="form-label">Additional Notes</label>
              <textarea className="form-control" id="cart" rows="3" placeholder="Add any additional notes here"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Add to Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
