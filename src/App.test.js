import { render } from '@testing-library/react';
import App from './App';

test('renders all buttons', () => {

  // we destructure the getByText query and render and render the App component.
  const { getByText } = render(<App />);

  // Matching a string
  const upButton = getByText('up', {exact: false}); // {exact: false} ignore case

  // Matching a regex
  const dnButton = getByText(/down/i); // matching a substring, i ignores case
  const pntButton = getByText(/^print$/i); // matches the full string, i ignore case

  // Our expectations are just that, what we expect the outcome to be.
  // In this case, we expect to find the text from all our buttons in the document.
  
  expect(upButton).toBeInTheDocument()
  expect(dnButton).toBeInTheDocument()
  expect(pntButton).toBeInTheDocument()
});
