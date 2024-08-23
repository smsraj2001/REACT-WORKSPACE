import React from 'react';

const UserForm = () => {
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [userError, setUserError] = React.useState(false);
    const [passError, setPassError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [phoneError, setPhoneError] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userError || passError || emailError || phoneError) {
            alert("Please correct the errors before submitting the form.");
        } else {
            alert("Form Submitted Successfully");
            console.log("Form Submitted");
        }
    };

    const userHandleChange = (e) => {
        let u = e.target.value;
        if (u.length > 4) {
            setUser(u);
            setUserError(false);
        } else {
            setUserError(true);
        }
    };

    const passwordHandleChange = (e) => {
        let p = e.target.value;
        if (p.length > 4) {
            setPass(p);
            setPassError(false);
        } else {
            setPassError(true);
        }
    };

    const emailHandleChange = (e) => {
        let em = e.target.value;
        if (RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(em)) {
            setEmail(em);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const phoneHandleChange = (e) => {
        let ph = e.target.value;
        if (RegExp("^[0-9]{10}$").test(ph)) {
            setPhone(ph);
            setPhoneError(false);
        } else {
            setPhoneError(true);
        }
    };

    return (
        <div className="container mt-5 col-md-6 offset-md-3">
            <h1 className="text-center mb-4">User Form</h1>
            <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">User Name</label>
                    <input
                        type="text"
                        className={`form-control ${userError ? 'is-invalid' : ''}`}
                        id="user"
                        placeholder="Enter User Name"
                        onChange={userHandleChange}
                        autoComplete='off'
                    />
                    {userError && <div className="invalid-feedback">User name should be more than 4 characters</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${passError ? 'is-invalid' : ''}`}
                        id="pass"
                        placeholder="Enter Password"
                        onChange={passwordHandleChange}
                        autoComplete='off'
                    />
                    {passError && <div className="invalid-feedback">Password should be more than 4 characters</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Enter Email"
                        onChange={emailHandleChange}
                        autoComplete='off'
                    />
                    {emailError && <div className="invalid-feedback">Email should be in the correct format</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                        id="phone"
                        placeholder="Enter Phone Number"
                        onChange={phoneHandleChange}
                        autoComplete='off'
                    />
                    {phoneError && <div className="invalid-feedback">Phone number should be 10 digits</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
