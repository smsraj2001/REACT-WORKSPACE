import { useState } from "react";

function Form() {
    // Define name state value with default value 'Guest'
    const [name, setName] = useState("Guest");

    // Handle the change in input value and update state
    function handleValChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    {/* Update the name state on every text entered by user */}
                    <label htmlFor="nameInput">Name:</label>
                    <input 
                        type="text" 
                        id="nameInput"
                        value={name}
                        onChange={handleValChange}
                    />
                </div>
            </form>
            {/* Display name state value */}
            <p id="name">Name value: {name}</p>
        </div>
    );
}

export default Form;
