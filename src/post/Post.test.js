import React from "react";
import {render} from "@testing-library/react";
import { Post } from "./Post";


describe("<Post />", () => {

    it('should render one element belonging to post-item class', function () {
        const { container } = render(<Post />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-item').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to buttons-container class', function () {
        const { container } = render(<Post />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('buttons-container').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render two element belonging to button class', function () {
        const { container } = render(<Post />);

        const expectedResult = 2;
        const actualResult = container.getElementsByClassName('button').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-body class', function () {
        const { container } = render(<Post />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-body').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-title class', function () {
        const { container } = render(<Post />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-title').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-details class', function () {
        const { container } = render(<Post />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-details').length;

        expect(actualResult).toBe(expectedResult)
    });
})
