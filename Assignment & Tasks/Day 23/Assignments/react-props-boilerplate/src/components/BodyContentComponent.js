import './Body.css';

function BodyContentComponent(props) {
    return (
        <div className="BodyContent">
            {/* Print the prop content below */}
            <h4>This is Body {props.bodyobj.message} Component</h4>
        </div>
    );
}

export default BodyContentComponent;
