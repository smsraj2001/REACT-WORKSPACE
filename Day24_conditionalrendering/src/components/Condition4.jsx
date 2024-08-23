import React from 'react';

const Condition4 = () => {
    let a = 2;
    const [user, setUser] = React.useState(1);
    const [result, setResult] = React.useState(null);

    const [userForm, setUserForm] = React.useState(1);
    const [resultForm, setResultForm] = React.useState(null); 

    const handleResult1 = (event) => {
        const inputValue = event.target.value;
        setUser(inputValue);
        setResult(
            inputValue === '1' ? <h2>This is user</h2> :
            inputValue === '2' ? <h2>This is admin</h2> :
            <h2>Invalid</h2>
        );
    };

    const handleResult2 = (event) => {
        event.preventDefault();
        setResultForm(
            userForm === '1' ? <h2>This is user</h2> :
            userForm === '2' ? <h2>This is admin</h2> :
            <h2>Invalid</h2>
        );
    };

    return (
        <div>
            {/* Short circuit evaluation */}
            {a === 1 && <h2>This is user</h2>}
            {(a === 1 && <h2>This is user</h2>) || (a === 2 && <h2>This is admin</h2>)}
            
            {/* Form with submit button */}
            <form onSubmit={handleResult2}>
                <input
                    type="text"
                    value={userForm}
                    onChange={(e) => setUserForm(e.target.value)}
                />
                <button type="submit" className="btn btn-light">Submit</button>
            </form>
            {resultForm}

            {/* Input with dynamic result update */}
            <input
                type="text"
                value={user}
                onChange={handleResult1}
            />
            {result}
        </div>
    );
};

export default Condition4;
