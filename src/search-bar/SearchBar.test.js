import React from "react";
import { SearchBar } from "./SearchBar";
import { render, screen } from '@testing-library/react';

describe('<SearchBar />', () => {
    it('should have one element belonging to search-bar-container class', function () {
        const { container } = render(<SearchBar />);
        
        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('search-bar-container').length;
        
        expect(actualResult).toBe(expectedResult);
    });

    it('should has a textbox with Search Reddit posts content', function () {
        render(<SearchBar />);

        const expectedResult = 'Search Reddit posts';
        const actualResult = screen.getByRole('textbox')
        expect(actualResult).toHaveValue(expectedResult)

    });

    it('should has a button with Search content', function () {
        render(<SearchBar />);

        const expectedResult = 'Search';
        const actualResult = screen.getByRole('button');
        expect(actualResult).toHaveTextContent(expectedResult);
    });
})