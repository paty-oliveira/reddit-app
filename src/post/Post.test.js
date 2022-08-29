import React from "react";
import {render} from "@testing-library/react";
import { Post, extractCommentsFromPost } from "./Post";


describe("<Post />", () => {

    const mockPost =
        {
            title: "undoubtedly the best photo I took at my sister's wedding",
            author: "BabyGroot1337",
            time: 1659895802,
            numberComments: 3042,
            ups: 155805,
            downs: 0,
            commentsUrl: "/r/funny/comments/wim1n1/undoubtedly_the_best_photo_i_took_at_my_sisters/"
        }

    it('should render one element belonging to post-item class', function () {
        const { container } = render(<Post post={mockPost}/>);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-item').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to buttons-container class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('buttons-container').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render two element belonging to button class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 2;
        const actualResult = container.getElementsByClassName('button').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-body class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-body').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-title class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-title').length;

        expect(actualResult).toBe(expectedResult)
    });

    it('should render one element belonging to post-details class', function () {
        const { container } = render(<Post post={mockPost} />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('post-details').length;

        expect(actualResult).toBe(expectedResult)
    });
})

