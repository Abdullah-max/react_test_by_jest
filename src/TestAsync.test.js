import { cleanup, fireEvent, render,  waitFor } from "@testing-library/react"
import TestAsync from "./TestAsync"

afterEach(cleanup)

it('should increments counter after 1s', async()=>{
    const { getByTestId, getByText } = render(<TestAsync />);

    fireEvent.click(getByTestId('up'))
    // const num = getByText('1')
    await waitFor(() => expect(getByText('1')).toHaveTextContent('1'))
    
})