import React from "react";
import { Header } from "./Header";
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
    it('should have one element belonging to App-header class', function () {
        const {container} = render(<Header />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('App-header').length;

        expect(actualResult).toBe(expectedResult);
    });

    it('should have two elements belonging to header-container class ', function () {
        const {container} = render(<Header />);

        const expectedResult = 2;
        const actualResult = container.getElementsByClassName('header-container').length;

        expect(actualResult).toBe(expectedResult);
    });

    it('should has a title', function () {
        render(<Header />);

        const expectedResult = 'Reddit';
        expect(screen.getByText(expectedResult)).toBeInTheDocument();
    });

    it('should render the SearchBar component', function () {
        render(<Header />);

        expect(screen.getByText('Search')).toBeInTheDocument();
    });
})
