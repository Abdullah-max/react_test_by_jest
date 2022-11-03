import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history"
import React from "react";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import TestRouter from "./TestRouter";

const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render(
            <React.Fragment history={history}>
                {component}
            </React.Fragment>
        )
    }
}

describe('should be render react router', () => {
    it('should render the home page', () => {
        const { container, getByTestId } = renderWithRouter(<TestRouter />);
        const navbar = getByTestId('navbar');
        const link = getByTestId('home-link');

        expect(container.innerHTML).toMatch(/Home Page/i)
        expect(navbar).toContainElement(link)
    });
    it('should navigate to the about page', () => {
        const { container, getByTestId } = renderWithRouter(<TestRouter />);

        fireEvent.click(getByTestId('about-link'));
        expect(container.innerHTML).toMatch(/about page/i)
    })
    it('should navigate to the contact page with the params', () => {
        const { container, getByTestId } = renderWithRouter(<TestRouter />);

        fireEvent.click(getByTestId('contact-link'));
        expect(container.innerHTML).toMatch(/john doe/i)
    })
})