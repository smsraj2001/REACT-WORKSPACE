import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from '@testing-library/react';


//Scenario: Check if form accepts input and changes state value
test('BodyComponent renders Form, accepts input and change state value', () => {
    render(<BodyComponent />);
    const name_entered = screen.getByTestId("name_entered");
    const inputfield = screen.getByTestId("inputfield");
    fireEvent.change(inputfield)
    expect(name_entered).toHaveTextContent(`Name Entered: ${inputfield.value}`);

});