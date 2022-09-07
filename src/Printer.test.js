import { fireEvent, render } from "@testing-library/react"
import Printer from "./Printer"

describe('input field', () => {
    it('should renders correctly', () => {
        // Here we destructure a new query provided by REact Testing Library that looks for the placeholder text in our mind input field.
        const { getByPlaceholderText } = render(<Printer />)

        // In this example, we are taking a different approach by not using a variable.
        // We simply pass in the entire query with the string we are looking for into our expectation.

        expect(getByPlaceholderText(/type a message.../i)).toBeInTheDocument()

    })

    it('updates on change', () => {
        // we destructure our query
        const { getByPlaceholderText } = render(<Printer />);

        // Assign the current value of the placeholder
        // to our message variable

        const message = getByPlaceholderText(/type a message.../i);

        // here we use the 'change' event and pass it the current placeholder and the new value to submit.
        fireEvent.change(message, {target: {value: 'Hello world'}});

        // we are expecting the new value to be what we submitted
        expect(message.value).toBe('Hello world')
    })
    describe('print button', () => {
        describe('with data inside the message', () => {
            it('prints the message to the screen', () => {

                // we destructure the queries
                const { getByText, getByRole, getByPlaceholderText } = render(<Printer />);

                // assign the current value of the placeholder to our variable
                const msgInput = getByPlaceholderText(/type a message.../i);

                // Here we use the "change" event and pass it the current placeholder and the new value to submit
                fireEvent.change(msgInput, {target: {value: 'Hello World'}});

                // fire the click event on the print button.
                // since there is only one button, we can use the getByRole query.
                fireEvent.click(getByRole('button'));

                // we look for the text of the printed message on the document.
                const message = getByText('Hello World')

                // we should see the message on the screen.
                expect(message).toBeInTheDocument()

            });

            it('should not disabled', () => {
                // we destructure our query
                const {getByRole, queryByPlaceholderText} = render(<Printer />);

                // Assign the current value of the placeholder
                // to our message variable

                const msgInput = queryByPlaceholderText('Type a message...');

                // Here we use the "change" event and pass it
                // the current placeholder and the new value to submit.
                fireEvent.change(msgInput, {target: {value : 'Hello World'}});

                // we look for our button
                const btn = getByRole('button');
            
                // we expect the button to be disabled.
                expect(btn).not.toBeDisabled()
            });

            describe('without data inside message', ()=>{
                it('should be disabled', ()=>{
                    // we destructure our query
                    const {getByRole} = render(<Printer />);

                    // we look for our button.
                    const btn = getByRole('button');

                    // we expect the button to be disabled.
                    expect(btn).toBeDisabled()
                })
            })
        })
    })
})