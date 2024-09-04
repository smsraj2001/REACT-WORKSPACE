import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from '@testing-library/react';

// Scenario: Check if Name entered field contains text as `Name Entered: John` by default
test('Initial value of Name entered field to be John', () => {
    render(<BodyComponent />)
    const name_entered = screen.getByTestId("name_entered");
    expect(name_entered).toHaveTextContent('Name Entered: John');
});