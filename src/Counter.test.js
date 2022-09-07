import { fireEvent, render } from '@testing-library/react'
import Counter from './Counter'

it("increments count by one when up is clicked.", () => {

    // Destructure our query functions
    const {getByText, getByTestId } = render(<Counter />);

    // simulate a click event on the "up" button.
    fireEvent.click(getByTestId('up'));
    fireEvent.click(getByTestId('up'));

    // simulate a click event on the "down" button.
    fireEvent.click(getByTestId('down'));
    
    // with this we make sure the number 1 is in the document
    // after clicking the 'Up' button
    // If it is not found the test will fail at this point.
    let num = getByText('1')

    // we expect our test to find the number 1 and pass
    expect(num).toBeInTheDocument()

    // simulate a click event on the "down" button.
    fireEvent.click(getByTestId('down'));

    // we expect that our test will NOT find the number 1 in the document
    expect(num).not.toBeInTheDocument()
})