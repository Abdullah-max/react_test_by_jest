import { cleanup, fireEvent, render } from "@testing-library/react"
import CounterProvider, { Counter } from "./TextContext"

const renderWithContext = (component) => {
    return {
        ...render(
            <CounterProvider>
                {component}
            </CounterProvider>

        )
    }
}

afterEach(cleanup);

describe('should render counter info', ()=> {
    it('check if initial state is equal to zero', () => {
        const { getByTestId } = renderWithContext(<Counter />);
        const display = getByTestId('counter');
        expect(display).toHaveTextContent('0')
    });
    it('check if initial state is equal to one', () => {
        const { getByTestId } = renderWithContext(<Counter />);
        fireEvent.click(getByTestId('button-up'))
        const display = getByTestId('counter');
        expect(display).toHaveTextContent('1')
    })
})