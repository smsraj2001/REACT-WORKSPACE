import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from '@testing-library/react';

// Scenario: Check if state value is set to `John` by default
test('Initial value of state to be John', () => {
    render(<BodyComponent />);

    const inputField = screen.getByTestId("inputfield");
    expect(inputField).toHaveValue('John');
    expect(inputField.value).toBe('John');
});