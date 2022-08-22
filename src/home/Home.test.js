import React from "react";
import {render} from "@testing-library/react";
import { Home } from "./Home";

describe("<Home />", () => {

    it('should render one element belonging to home-container class', function () {
        const { container } = render(<Home />);

        const expectedResult = 1;
        const actualResult = container.getElementsByClassName('home-container').length;

        expect(actualResult).toBe(expectedResult)
    });
})