function ConditionRender1(props) {
  // Define variable names to store props value
  const names = props.names || [];

  // Define variable firstName to fetch First value (Zeroth element) from array
  const firstName = (names.length > 0) ? names[0] : null;

  return (
    <div className="ConditionRender1">
      <div>
        {/* Check if names array is undefined or array is empty and display No Contact Details Found!! */}
        {(typeof names === 'undefined' || names.length <= 0 || !Array.isArray(names)) ? 
        (<p>No Contact Details Found!!</p>) : 
          (
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}

        {/* Check if names array is defined and has data in it and, Then Display the names as list */}

      </div>
      <div>
        {/* Check if firstName is defined and print the same as First Person:{firstName} */}
        {firstName && <p>First Person: {firstName}</p>}
      </div>
    </div>
  );
}

export default ConditionRender1;
