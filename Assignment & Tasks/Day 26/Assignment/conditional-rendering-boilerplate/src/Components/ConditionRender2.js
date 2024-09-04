function ConditionRender2(props) {
    // Define variable to store props value
    const participantsLoggedIn = props.loggedIn
    return (
      <div className="ConditionRender2">
        <h1>Welcome to StackRoute!!</h1>
        
        {/* Define a Condition operator (<condition>?(Statement1):(Statement2)) to check participantsLoggedIn value
        if participantsLoggedIn is true, then display Hello Alpha!!
        else if participantsLoggedIn is false, then display Please login to continue!! */}
        {
          (participantsLoggedIn) ? (<p>Hello Alpha!!</p>) : (<p>Please login to continue!!</p>)
        }
      </div>
    );
  }
  
  export default ConditionRender2;
  