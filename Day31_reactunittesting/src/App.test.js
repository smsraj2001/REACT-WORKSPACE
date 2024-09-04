import { render, screen } from '@testing-library/react';
import App from './App';
import Vehicle from './components/Vehicle';

test('renders learn react link', () => {
  render(<App />);
  const someText = screen.getByText(/learn react/i);
  expect(someText).toBeInTheDocument();
});

test('Vehicle Paragraph Test', () => {
  render(<Vehicle />);
  const para = screen.getByTestId("para1");
  expect(para).toBeInTheDocument();
})

test('Vehicle Paragraph Text Test', () => {
  render(<Vehicle />);
  const para = screen.getByTestId("para1");
  expect(para).toHaveTextContent(/this is para/i)
})

test("UserName Placeholder", () => {
  render(<Vehicle />);
  const userId = screen.getByTestId("user");
  const placeholdertext = screen.getByPlaceholderText("UserName");

  expect(userId).toBeInTheDocument();
  expect(placeholdertext).toBeInTheDocument();
})