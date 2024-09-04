import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from "@testing-library/react";

global.fetch = jest.fn();
//Scenario: Check if `h2` tag in BodyComponent contains text `Hello Charlie!!` when prop is sent as name="Charlie"

test("Checking h2 content in Body", () => {
    render(<BodyComponent name = "Charlie" />);
    const h2element = screen.getByRole('heading', {level: 2});
    expect(h2element).toHaveTextContent("Hello Charlie!!")
})