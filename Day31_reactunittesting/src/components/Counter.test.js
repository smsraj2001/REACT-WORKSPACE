import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Test for Initial Counter Value', () => 
{
    render(<Counter />);
    // const counter = screen.getByTestId("counter");
    // const countertext = screen.getByText('0');
    // expect(counter).toBeInTheDocument();

    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent('0');
    expect(counter).toBeInTheDocument();

})

test("Test for Increment", () =>
{
    render(<Counter />);
    const counter = screen.getByTestId('counter');
    const incButton = screen.getByTestId('inc');

    expect(counter).toHaveTextContent('0');

    fireEvent.click(incButton);
    expect(counter).toHaveTextContent('1');

    fireEvent.click(incButton);
    expect(counter).toHaveTextContent('2');
})

test("Test for Decrement", () =>
    {
        render(<Counter />);
        const counter = screen.getByTestId('counter');
        const decButton = screen.getByTestId('dec');
    
        expect(counter).toHaveTextContent('0');
    
        fireEvent.click(decButton);
        expect(counter).toHaveTextContent('-1');
    })