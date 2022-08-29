import React from "react";
import { render } from "@testing-library/react";
import { PostsContainer, extractPostsFromReddit } from "./PostsContainer";

describe("<PostsContainer />", () => {

    it('should render one element belonging to post-container class', function () {
        const { container } = render(<PostsContainer />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-container').length;

        expect(actualResult).toBe(expectedResult)
    });
})
