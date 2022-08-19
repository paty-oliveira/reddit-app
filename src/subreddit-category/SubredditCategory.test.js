import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { SubredditCategory } from "./SubredditCategory";

describe('<SubredditCategory />', () => {

    it('should have a title as Subreddits', function () {
        render(<SubredditCategory />);

        const expectedTitle = 'Subreddits';
        expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });

})