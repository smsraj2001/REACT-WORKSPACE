import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from '@testing-library/react';

//Scenario: Check if Name Entered field contains `Name Entered: Guest` when `button` is clicked
test('BodyComponent changes state value to default when clicked', () => {

    render(<BodyComponent />)
    const name_entered = screen.getByTestId("name_entered");
    expect(name_entered).toHaveTextContent('Name Entered: John');
    const bodybutton = screen.getByTestId('bodybutton');
    fireEvent.click(bodybutton);
    expect(name_entered).toHaveTextContent('Name Entered: Guest');
});