import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, reducer } from "./reducer";
import TestRedux from "./TestRedux";

const reducerWithRedux =(
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    }
}

afterEach(cleanup);

describe('redux test', () => {
    it('should initial state is equal to zero', () =>{
        const {getByTestId} = reducerWithRedux(<TestRedux />);
        const num = getByTestId('counter')
        expect(num).toHaveTextContent('0')
    });
    it('increments the counter through redux', () =>{
        const {getByTestId} = reducerWithRedux(<TestRedux />, {initialState: {count: 5}});
        fireEvent.click(getByTestId('button-up'))
        const num = getByTestId('counter')
        expect(num).toHaveTextContent('6')
    });
    it('decrement the counter through redux', () => {
        const { getByTestId } = reducerWithRedux(<TestRedux />, {
            initialState: {count: 100}
        })
        fireEvent.click(getByTestId('button-down'))
        const num = getByTestId('counter');
        expect(num).toBeInTheDocument('99')
    })

})
