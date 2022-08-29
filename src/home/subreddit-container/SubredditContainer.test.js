import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { SubredditContainer } from "./SubredditContainer";

describe('<SubredditContainer />', () => {

    it('should have a title as Subreddits', function () {
        render(<SubredditContainer />);

        const expectedTitle = 'Subreddits';
        expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });

    it('should render one element belonging to subreddit-container class', function () {
        const { container } = render(<SubredditContainer />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('subreddit-container').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to subcategory-container class', function () {
        const { container } = render(<SubredditContainer />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('subcategory-container').length;

        expect(actualResult).toBe(expectedResult)
    });

})
